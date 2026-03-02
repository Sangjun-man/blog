# syntax=docker/dockerfile:1.7

FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/blog/package.json apps/blog/package.json
RUN pnpm install --frozen-lockfile

FROM base AS builder-server
WORKDIR /app
COPY --from=deps /app ./
COPY . .
ENV NEXT_OUTPUT_MODE=standalone
RUN pnpm --filter blog build

FROM node:20-alpine AS server
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
COPY --from=builder-server /app/apps/blog/.next/standalone ./
COPY --from=builder-server /app/apps/blog/.next/static ./apps/blog/.next/static
COPY --from=builder-server /app/apps/blog/public ./apps/blog/public
EXPOSE 3000
CMD ["node", "apps/blog/server.js"]

FROM base AS builder-static
WORKDIR /app
COPY --from=deps /app ./
COPY . .
ENV NEXT_OUTPUT_MODE=export
RUN pnpm --filter blog build

FROM nginx:1.27-alpine AS static
COPY infra/nginx/blog-static.conf /etc/nginx/conf.d/default.conf
COPY --from=builder-static /app/apps/blog/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
