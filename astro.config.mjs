// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// 🔧 部署时需要修改：
	// - Cloudflare Pages: site: 'https://your-project-name.pages.dev'
	// - GitHub Pages: site: 'https://your-username.github.io', base: '/astro-blog-main'
	// - Vercel: site: 'https://your-project.vercel.app'
	site: 'https://your-site-url.com',
	integrations: [mdx(), sitemap()],
});
