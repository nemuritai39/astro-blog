# 🚀 部署指南

## ✅ 已修复的问题

1. ✅ 首页路由冲突 - index.astro 现在是真正的欢迎页
2. ✅ Beta 版本依赖 - 降级到 Astro 5.x 稳定版
3. ✅ 重复字体引入 - BaseHead.astro 已清理
4. ✅ CSS @import - global.css 已移除 @import
5. ✅ Gallery Schema - 已添加 description 和 tags 字段
6. ✅ 网站 URL - 已添加部署平台占位符

---

## 📦 上传到 GitHub（网页端）

### 方法一：创建新仓库（推荐）

1. **删除旧仓库**（可选）
   - 进入旧的 `astro-blog-main` 仓库
   - Settings → 滚动到底部 → Delete this repository

2. **创建新仓库**
   - 访问 https://github.com/new
   - Repository name: `astro-blog-main`（或其他名字）
   - Description: `我的个人博客`
   - 选择 **Public**
   - ❌ 不要勾选 "Add a README file"
   - ❌ 不要勾选 "Add .gitignore"
   - 点击 **Create repository**

3. **上传文件**
   - 在新仓库页面，点击 **uploading an existing file**
   - 将整个 `astro-blog-fixed` 文件夹中的**所有文件**拖拽到页面
   - 确保包含：
     - `package.json`
     - `astro.config.mjs`
     - `src/` 文件夹
     - `public/` 文件夹
     - `.gitignore`
     - 等所有文件
   - Commit message 输入：`Initial commit - fixed version`
   - 点击 **Commit changes**

### 方法二：更新现有仓库

如果你想保留原仓库：

1. **删除所有文件**
   - 进入仓库
   - 在文件列表页面，点击每个文件 → 点击垃圾桶图标删除
   - 逐个删除所有文件（比较麻烦）

2. **上传新文件**
   - 按照"方法一"的步骤 3 上传

---

## 🌐 部署到 Cloudflare Pages

### 第一步：修改配置文件

在上传到 GitHub **之前**，先修改 `astro.config.mjs`：

1. 打开 `astro.config.mjs`
2. 找到这一行：
   ```javascript
   site: 'https://your-site-url.com',
   ```
3. 改为：
   ```javascript
   site: 'https://your-project-name.pages.dev',
   ```
   💡 `your-project-name` 替换为你想要的项目名

### 第二步：连接 Cloudflare Pages

1. **登录 Cloudflare**
   - 访问 https://dash.cloudflare.com/
   - 登录或注册账号

2. **创建 Pages 项目**
   - Workers & Pages → Create application → Pages
   - Connect to Git → GitHub
   - 授权并选择你的 `astro-blog-main` 仓库
   - Begin setup

3. **配置构建设置**
   ```
   Project name: your-project-name（你想要的名字）
   Production branch: main
   Framework preset: Astro
   Build command: npm run build
   Build output directory: dist
   ```

4. **添加环境变量**（点击 Add variable）
   ```
   NODE_VERSION = 20
   ```

5. **Save and Deploy**

### 第三步：等待部署

- 构建时间：2-5 分钟
- 部署成功后，你会获得：
  ```
  https://your-project-name.pages.dev
  ```

---

## 🎯 或者部署到 GitHub Pages

### 第一步：修改配置文件

修改 `astro.config.mjs`：

```javascript
export default defineConfig({
	site: 'https://your-github-username.github.io',
	base: '/astro-blog-main',
	integrations: [mdx(), sitemap()],
});
```

💡 替换 `your-github-username` 为你的 GitHub 用户名

### 第二步：创建 GitHub Actions 工作流

在 GitHub 仓库中：

1. **Add file** → **Create new file**
2. 文件名：`.github/workflows/deploy.yml`
3. 粘贴以下内容：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

4. **Commit new file**

### 第三步：启用 GitHub Pages

1. **Settings** → **Pages**
2. Source 选择：**GitHub Actions**
3. 等待部署完成

### 访问地址

```
https://your-username.github.io/astro-blog-main/
```

---

## 📝 修改说明

### 修复的文件列表

```
✅ package.json - 使用稳定版本依赖
✅ astro.config.mjs - 添加部署配置注释
✅ src/components/BaseHead.astro - 删除重复字体
✅ src/content.config.ts - 完善 Gallery Schema
✅ public/global.css - 移除 @import
✅ src/pages/index.astro - 改为欢迎首页
✅ .gitignore - 已存在，未修改
```

### 新增的功能

- 🎨 全新首页设计，带有三个主要入口卡片
- 🎯 更清晰的导航结构
- 💎 中世纪风格装饰元素

---

## ⚠️ 重要提示

### 部署前必须修改：

1. **astro.config.mjs** 中的 `site` 和 `base`（如果用 GitHub Pages）
2. **src/consts.ts** 中的网站标题和描述（可选）

### 如果遇到构建错误：

1. 检查 `package.json` 中的依赖版本
2. 确保 Node.js 版本 >= 18
3. 查看构建日志的具体错误信息

---

## 🎉 完成！

上传并部署后：

1. 获取你的网站链接
2. 分享给朋友
3. 继续完善内容

有问题随时查看这个文档或询问！
