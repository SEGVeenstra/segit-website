import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const apps = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/apps' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      shortTitle: z.string().optional(),
      order: z.number(),
      heading: z.string(),
      summary: z.string(),
      image: image(),
      imageAlt: z.string(),
      imagePosition: z.string().default('center'),
      appStoreUrl: z.string().url().optional(),
      playStoreUrl: z.string().url().optional(),
      websiteUrl: z.string().url().optional(),
    }),
});

const legal = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    app: z.string(), // slug van de bijbehorende app
    kind: z.string(),
  }),
});

export const collections = { apps, legal };
