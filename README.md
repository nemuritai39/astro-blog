# nemu · archive 

一个中世纪哥特风格的个人博客网站，使用 Astro 构建。

## ✨ 特性

- 📝 **Writing** - 随笔、诗歌、思考、目标
- 🖼️ **Gallery** - 照片与视频归档
- 🔒 **With You** - 私密空间
- 🎨 中世纪哥特美学设计
- 📱 响应式布局
- ⚡ 快速加载

## 🚀 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:4321
```

### 构建

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 📦 部署

详细部署指南请查看 [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

### Cloudflare Pages（推荐）

1. 修改 `astro.config.mjs` 中的 `site`
2. 推送到 GitHub
3. 在 Cloudflare Pages 中连接仓库
4. 选择 Astro 框架预设
5. 部署

### GitHub Pages

1. 修改 `astro.config.mjs` 添加 `base`
2. 创建 `.github/workflows/deploy.yml`
3. 启用 GitHub Pages
4. 部署

## 🛠️ 技术栈

- [Astro](https://astro.build/) - 静态网站生成器
- [MDX](https://mdxjs.com/) - Markdown 增强
- TypeScript - 类型安全
- Google Fonts - 中世纪风格字体

## 📁 项目结构

```
/
├── public/          # 静态资源
│   ├── gallery/     # 图片资源
│   └── global.css   # 全局样式
├── src/
│   ├── components/  # 组件
│   ├── content/     # 内容集合
│   │   ├── essays/
│   │   ├── poems/
│   │   ├── thinking/
│   │   ├── goals/
│   │   └── gallery/
│   ├── layouts/     # 布局
│   ├── pages/       # 页面路由
│   └── styles/      # 样式文件
├── astro.config.mjs # Astro 配置
└── package.json     # 依赖配置
```

## 📝 内容管理

### 添加文章

在对应的内容集合文件夹中创建 `.md` 文件：

```markdown
---
title: "文章标题"
description: "文章描述"
pubDate: 2024-01-01
draft: false
---

文章内容...
```

### 添加照片

在 `src/content/gallery/` 中创建 `.md` 文件：

```markdown
---
title: "照片标题"
description: "照片描述"
cover: "/gallery/your-photo.jpg"
pubDate: 2024-01-01
tags: ["标签1", "标签2"]
draft: false
---
```

## 🎨 自定义

### 修改网站信息

编辑 `src/consts.ts`：

```typescript
export const SITE_TITLE = 'Your Site Title';
export const SITE_DESCRIPTION = 'Your description';
```

### 修改样式

- 全局样式：`public/global.css`
- CSS 变量：`public/global.css` 的 `:root` 部分
- 组件样式：每个 `.astro` 文件的 `<style>` 部分

## 📄 许可

MIT License

## 🙏 致谢

设计灵感来源于中世纪哥特美学与现代极简主义的结合。
