import { defineCollection, z } from 'astro:content';

const gallery = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		pubDate: z.coerce.date(),
		cover: z.string(),
	}),
});

const withYou = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		pubDate: z.coerce.date(),
		cover: z.string(),
		description: z.string().optional(), // 改成可选，兼容所有文件
	}),
});

export const collections = { gallery, 'with-you': withYou };
