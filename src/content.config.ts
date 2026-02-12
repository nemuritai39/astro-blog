import { defineCollection, z } from 'astro:content';

const gallery = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		pubDate: z.coerce.date(),
		cover: z.string(), // 确保这里和你 md 文件里的字段名一致
	}),
});

const withYou = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		pubDate: z.coerce.date(),
		cover: z.string(),
		description: z.string(),
	}),
});

export const collections = { 'gallery': gallery, 'with-you': withYou };
