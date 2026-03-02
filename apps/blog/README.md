# 블로그

## Docker 이미지 빌드

루트(`project/blog`)에서 실행:

### 1) Next.js 서버형 이미지 (권장)

```bash
docker build --target server -t blog-server:latest .
docker run --rm -p 3000:3000 blog-server:latest
```

- 런타임: Node.js
- 경로: `http://localhost:3000/blog` (basePath: `/blog`)

### 2) 정적 export 이미지 (Nginx)

```bash
docker build --target static -t blog-static:latest .
docker run --rm -p 8080:80 blog-static:latest
```

- 런타임: Nginx
- 경로: `http://localhost:8080/blog`

## 로컬 빌드 모드

```bash
pnpm --filter blog run build:server   # NEXT_OUTPUT_MODE=standalone
pnpm --filter blog run build:static   # NEXT_OUTPUT_MODE=export
```

## CI/CD + GitOps 흐름

1. `repository_dispatch(blog-content-updated)` → `.github/workflows/deploy_blog.yml`
   - Obsidian 글 동기화 후 `main`으로 커밋
2. `push main` 또는 수동 실행 → `.github/workflows/ci_cd_blog.yml`
   - lint/build → Docker(static) 이미지 GHCR 푸시 → `kubernates` 워크플로우 dispatch
3. `kubernates/.github/workflows/update-blog-image.yml`
   - `apps/blog/development/kustomization.yaml` digest 갱신 (GitOps)

### 필요한 GitHub Secrets

- `OBSIDIAN_FETCH_KEY`: Obsidian 레포 읽기용 SSH 키
- `DEPLOY_SSH_KEY`: blog 레포 푸시용 SSH 키
- `GITOPS_PAT`: `kubernates` 레포 workflow_dispatch 호출 토큰
