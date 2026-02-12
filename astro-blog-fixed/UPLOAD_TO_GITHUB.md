# 📦 如何上传到 GitHub（网页端超详细步骤）

## 第一步：下载并解压文件

1. 下载 `astro-blog-fixed.zip` 到你的电脑
2. 右键 → 解压缩到某个文件夹
3. 你会得到一个 `astro-blog-fixed` 文件夹

---

## 第二步：删除旧仓库（可选）

如果你想从头开始：

1. 访问 https://github.com
2. 登录你的账号
3. 进入你的旧 `astro-blog-main` 仓库
4. 点击 **Settings**（设置）
5. 滚动到最底部，找到 **Danger Zone**
6. 点击 **Delete this repository**
7. 输入仓库名确认删除

---

## 第三步：创建新仓库

1. 访问 https://github.com/new
2. 填写信息：
   - **Repository name**: `astro-blog-main`（或任意你喜欢的名字）
   - **Description**: `我的个人博客`（可选）
   - **Public** 或 **Private**：选 Public（这样 Cloudflare Pages 才能访问）
   - ❌ **不要** 勾选 "Add a README file"
   - ❌ **不要** 勾选 "Add .gitignore"
   - ❌ **不要** 选择 "Choose a license"
3. 点击 **Create repository**

---

## 第四步：上传文件

### 方式 A：直接拖拽（推荐）

1. 在新创建的空仓库页面，你会看到一些提示
2. 找到 "**uploading an existing file**" 链接，点击它
3. 打开你电脑上的 `astro-blog-fixed` 文件夹
4. **选中文件夹内的所有文件**（不是文件夹本身！）
   - 按 `Ctrl+A` (Windows) 或 `Cmd+A` (Mac) 全选
   - 确保选中的是文件夹**里面**的所有文件和文件夹
5. 把这些文件**拖拽**到浏览器的上传区域
6. 等待所有文件上传完成（会显示进度）
7. 在底部 **Commit changes** 区域：
   - Commit message 输入：`Initial commit - fixed version`
8. 点击绿色的 **Commit changes** 按钮

### 方式 B：逐个上传（备选）

如果拖拽不行：

1. 在仓库页面点击 **Add file** → **Upload files**
2. 点击 **choose your files**
3. 选择 `astro-blog-fixed` 文件夹内的所有文件
4. 上传并提交

---

## 第五步：确认文件结构

上传完成后，检查仓库根目录应该有：

```
✅ package.json
✅ astro.config.mjs
✅ tsconfig.json
✅ README.md
✅ DEPLOYMENT_GUIDE.md
✅ .gitignore
✅ src/（文件夹）
✅ public/（文件夹）
```

❌ **不应该有**：
- `astro-blog-fixed/`（这是文件夹名，不应该在仓库里）
- 如果看到这个，说明你上传错了，上传的是整个文件夹而不是文件夹内的内容

**如果上传错了怎么办**：
1. 删除错误的文件夹
2. 重新上传文件夹**内部**的文件

---

## 第六步：部署到 Cloudflare Pages

### 6.1 修改配置（在 GitHub 网页端）

1. 在仓库中，点击 `astro.config.mjs` 文件
2. 点击右上角的 **铅笔图标**（编辑）
3. 找到这一行：
   ```javascript
   site: 'https://your-site-url.com',
   ```
4. 改为你想要的项目名（例如改为 `nemu-blog`）：
   ```javascript
   site: 'https://nemu-blog.pages.dev',
   ```
5. 滚动到底部，点击 **Commit changes**

### 6.2 连接 Cloudflare

1. 访问 https://dash.cloudflare.com/
2. 登录或注册账号（用邮箱注册即可）
3. 在左侧菜单找到 **Workers & Pages**
4. 点击右上角 **Create application**
5. 选择 **Pages** 标签
6. 点击 **Connect to Git**

### 6.3 授权 GitHub

1. 选择 **GitHub**
2. 点击 **Connect GitHub**
3. 会跳转到 GitHub 授权页面
4. 选择 **Only select repositories**
5. 在下拉菜单中选择你的 `astro-blog-main` 仓库
6. 点击 **Install & Authorize**
7. 返回 Cloudflare

### 6.4 配置项目

1. 在仓库列表中，点击你的 `astro-blog-main`
2. 点击 **Begin setup**
3. 填写配置：

```
Project name: nemu-blog（或你想要的名字，这会成为你的域名）
Production branch: main
Framework preset: Astro
Build command: npm run build
Build output directory: dist
```

4. 点击 **Environment variables (advanced)** → **Add variable**
   - Variable name: `NODE_VERSION`
   - Value: `20`

5. 点击 **Save and Deploy**

### 6.5 等待部署

- 部署时间：2-5 分钟
- 你会看到构建日志滚动
- 成功后显示绿色勾号 ✅

### 6.6 获取网站地址

部署成功后，你会看到：

```
✅ Success! Your site is live at https://nemu-blog.pages.dev
```

复制这个链接，发给你的朋友！

---

## 常见问题

### Q: 上传文件后，仓库里有个 `astro-blog-fixed` 文件夹
**A**: 你上传错了。应该上传文件夹**里面**的内容，不是文件夹本身。删除后重新上传。

### Q: Cloudflare 部署失败
**A**: 查看错误日志，通常是：
- Node 版本问题 → 确认添加了 `NODE_VERSION=20` 环境变量
- 依赖问题 → 等一会儿重试，或检查 `package.json`

### Q: 网站样式乱了
**A**: 检查 `astro.config.mjs` 中的 `site` 配置是否正确

### Q: 找不到 "uploading an existing file" 链接
**A**: 直接访问：`https://github.com/你的用户名/astro-blog-main/upload/main`

---

## 🎉 完成后

1. 你会得到一个链接：`https://你的项目名.pages.dev`
2. 分享给朋友
3. 每次你在 GitHub 修改文件，Cloudflare 会自动重新部署

---

## 💡 后续优化

- 修改网站标题：编辑 `src/consts.ts`
- 添加文章：在 `src/content/essays/` 添加 `.md` 文件
- 添加照片：在 `src/content/gallery/` 添加 `.md` 文件，图片放在 `public/gallery/`

需要帮助？随时问我！
