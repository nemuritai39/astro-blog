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
		description: z.string(),
	}),
});

export const collections = { 
	'gallery': gallery, 
	'with-you': withYou 
};
