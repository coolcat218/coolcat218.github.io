import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    // Ordering on the index. Lower runs first.
    order: z.number(),
    // Short kicker shown in the ruled index row.
    category: z.string(),
    summary: z.string(),
    // Optional — fill in when you want years on the index.
    year: z.string().optional(),
    // Filename inside src/assets/work/
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    /** How the image fills its grid frame. Diagrams want `contain`; photos `cover`. */
    imageFit: z.enum(['cover', 'contain']).default('cover'),
    /** Atmospheric image rather than a figure: no caption, empty alt. */
    imageDecorative: z.boolean().default(false),
    pdf: z.string().optional(),
    repo: z.string().optional(),
    tools: z.array(z.string()).default([]),
  }),
});

export const collections = { projects };
