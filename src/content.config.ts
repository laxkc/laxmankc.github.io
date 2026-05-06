import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const work = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
	schema: z.object({
		title: z.string(),
		year: z.number(),
		role: z.string(),
		summary: z.string(),
		cover: z.string(),
		tags: z.array(z.string()).default([]),
		featured: z.boolean().default(false),
		order: z.number().default(0),
		href: z.url().optional(),
	}),
});

const posts = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		excerpt: z.string(),
		readTime: z.string(),
		draft: z.boolean().default(false),
	}),
});

export const collections = { work, posts };
