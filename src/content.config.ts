import { defineCollection, z } from "astro:content";

const baseSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  draft: z.boolean().optional().default(false),
});

// Gallery 专用 schema：支持 cover, note, description, tags
const gallerySchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  note: z.string().optional(),
  cover: z.string(),
  pubDate: z.coerce.date(),
  tags: z.array(z.string()).optional(),
  draft: z.boolean().optional().default(false),
});

export const collections = {
  essays: defineCollection({ type: "content", schema: baseSchema }),
  poems: defineCollection({ type: "content", schema: baseSchema }),
  thinking: defineCollection({ type: "content", schema: baseSchema }),
  goals: defineCollection({ type: "content", schema: baseSchema }),
  gallery: defineCollection({ type: "content", schema: gallerySchema }),
};
