import { defineCollection, z } from 'astro:content';

// 1. 画廊集合
const gallery = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		pubDate: z.coerce.date(),
		cover: z.string(), // 图片路径
		description: z.string().optional(),
	}),
});

// 2. With You 集合
const withYou = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		pubDate: z.coerce.date(),
		cover: z.string(),
		description: z.string(), // 私密内容，必填
	}),
});

// 3. 这里的名称必须对应文件夹名
export const collections = { 
	'gallery': gallery, 
	'with-you': withYou 
};
