import{_ as a,c as n,o as e,ah as i}from"./chunks/framework.e7xVyxua.js";const k=JSON.parse('{"title":"교재 개발 환경 설치법","description":"","frontmatter":{},"headers":[],"relativePath":"readme.md","filePath":"readme.md"}'),p={name:"readme.md"};function l(t,s,r,c,h,d){return e(),n("div",null,[...s[0]||(s[0]=[i(`<h1 id="교재-개발-환경-설치법" tabindex="-1">교재 개발 환경 설치법 <a class="header-anchor" href="#교재-개발-환경-설치법" aria-label="Permalink to “교재 개발 환경 설치법”">​</a></h1><h2 id="교재-개발-환경" tabindex="-1">교재 개발 환경 <a class="header-anchor" href="#교재-개발-환경" aria-label="Permalink to “교재 개발 환경”">​</a></h2><ul><li>Visual Code</li><li>VitePress</li></ul><h2 id="설치하기" tabindex="-1">설치하기 <a class="header-anchor" href="#설치하기" aria-label="Permalink to “설치하기”">​</a></h2><h3 id="node-js-환경-설치" tabindex="-1">Node.js 환경 설치 <a class="header-anchor" href="#node-js-환경-설치" aria-label="Permalink to “Node.js 환경 설치”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash</span></span>
<span class="line"><span>nvm install 24</span></span>
<span class="line"><span>node -v # &quot;v24.11.1&quot;가 출력되어야 합니다.</span></span>
<span class="line"><span>nvm current # &quot;v24.11.1&quot;가 출력되어야 합니다.</span></span>
<span class="line"><span>npm -v # 11.6.2가 출력되어야 합니다.</span></span></code></pre></div><h3 id="vitepress-프로젝트-초기화" tabindex="-1">VitePress 프로젝트 초기화 <a class="header-anchor" href="#vitepress-프로젝트-초기화" aria-label="Permalink to “VitePress 프로젝트 초기화”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>npm add -D vitepress@next</span></span>
<span class="line"><span>npx vitepress init</span></span></code></pre></div><h3 id="vitepress-서버-시작" tabindex="-1">VitePress 서버 시작 <a class="header-anchor" href="#vitepress-서버-시작" aria-label="Permalink to “VitePress 서버 시작”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>npm run docs:dev</span></span></code></pre></div><h3 id="프로젝트-설정" tabindex="-1">프로젝트 설정 <a class="header-anchor" href="#프로젝트-설정" aria-label="Permalink to “프로젝트 설정”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>┌  Welcome to VitePress!</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Where should VitePress initialize the config?</span></span>
<span class="line"><span>│  ./docs</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Where should VitePress look for your markdown files?</span></span>
<span class="line"><span>│  ./docs</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Site title:</span></span>
<span class="line"><span>│  My Awesome Project</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Site description:</span></span>
<span class="line"><span>│  A VitePress Site</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Theme:</span></span>
<span class="line"><span>│  Default Theme</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Use TypeScript for config and theme files?</span></span>
<span class="line"><span>│  Yes</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Add VitePress npm scripts to package.json?</span></span>
<span class="line"><span>│  Yes</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Add a prefix for VitePress npm scripts?</span></span>
<span class="line"><span>│  Yes</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Prefix for VitePress npm scripts:</span></span>
<span class="line"><span>│  docs</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>└  Done! Now run pnpm run docs:dev and start writing.</span></span></code></pre></div><h3 id="폴더-구조" tabindex="-1">폴더 구조 <a class="header-anchor" href="#폴더-구조" aria-label="Permalink to “폴더 구조”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ docs (프로젝트 루트 폴더)</span></span>
<span class="line"><span>│  ├─ .vitepress</span></span>
<span class="line"><span>│  │  └─ config.js</span></span>
<span class="line"><span>│  ├─ api-examples.md</span></span>
<span class="line"><span>│  ├─ markdown-examples.md</span></span>
<span class="line"><span>│  └─ index.md</span></span>
<span class="line"><span>└─ package.json</span></span></code></pre></div><h3 id="ai-챗봇" tabindex="-1">AI 챗봇 <a class="header-anchor" href="#ai-챗봇" aria-label="Permalink to “AI 챗봇”">​</a></h3><p><a href="https://docs.biel.ai/installation/vitepress" target="_blank" rel="noreferrer">https://docs.biel.ai/installation/vitepress</a><a href="https://github.com/aklinker1/vitepress-knowledge?ref=pkgstats.com" target="_blank" rel="noreferrer">https://github.com/aklinker1/vitepress-knowledge?ref=pkgstats.com</a></p>`,16)])])}const g=a(p,[["render",l]]);export{k as __pageData,g as default};
