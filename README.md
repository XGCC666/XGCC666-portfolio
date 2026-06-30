# 何星一个人主页

这是一个可公开部署的 Vue 3 + Vite + TypeScript 个人主页/在线简历项目，项目目录在桌面：

```text
C:\Users\29544\Desktop\he-xingyi-portfolio
```

## 页面

- `/`：首页
- `/projects`：项目作品
- `/resume`：在线简历
- `/contact`：联系方式

## 部署

推荐部署到 Vercel 或 Netlify：

```text
Build command: npm run build
Output directory: dist
```

项目已经包含：

- `vercel.json`：Vercel 路由重写配置
- `netlify.toml`：Netlify 构建和路由配置
- `public/_redirects`：Netlify / Cloudflare Pages 路由重写配置

## 内容位置

- 页面框架：`src/App.vue`
- 路由：`src/router.ts`
- 页面：`src/pages/`
- 简历数据：`src/data/profile.ts`
- 样式：`src/styles.css`
- 背景图：`public/assets/hero-abstract.png`

当前公开页面只展示邮箱、GitHub 和城市信息；电话号码没有放在网页公开资源中。
