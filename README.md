## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Build and Deploy with Docker

```shell
docker build --platform=linux/amd64 --tag asia-northeast1-docker.pkg.dev/${project-id}/${repository-id}/app:latest .
docker push asia-northeast1-docker.pkg.dev/${project-id}/${repository-id}/app:latest
```
