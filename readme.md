# 교재 개발 환경 설치법
## 교재 개발 환경

* Visual Code
* VitePress



## 설치하기

### Node.js 환경 설치

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
nvm install 24
node -v # "v24.11.1"가 출력되어야 합니다.
nvm current # "v24.11.1"가 출력되어야 합니다.
npm -v # 11.6.2가 출력되어야 합니다.
```

### VitePress 프로젝트 초기화
```
npm add -D vitepress@next
npx vitepress init
```
### VitePress 서버 시작
```
npm run docs:dev
```

### 프로젝트 설정
```
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./docs
│
◇  Where should VitePress look for your markdown files?
│  ./docs
│
◇  Site title:
│  My Awesome Project
│
◇  Site description:
│  A VitePress Site
│
◇  Theme:
│  Default Theme
│
◇  Use TypeScript for config and theme files?
│  Yes
│
◇  Add VitePress npm scripts to package.json?
│  Yes
│
◇  Add a prefix for VitePress npm scripts?
│  Yes
│
◇  Prefix for VitePress npm scripts:
│  docs
│
└  Done! Now run pnpm run docs:dev and start writing.
```
### 폴더 구조
```
.
├─ docs (프로젝트 루트 폴더)
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md
└─ package.json
```
### AI 챗봇

https://docs.biel.ai/installation/vitepress
https://github.com/aklinker1/vitepress-knowledge?ref=pkgstats.com
