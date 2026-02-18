import { defineCollection, z } from "astro:content";

const knowledge = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),

    category: z.enum([
      "flexible",
      "paper",
      "printing",
      "compliance",
      "artwork",
      "cost"
    ]),

    // SEO 稳定结构
    publishDate: z.date().optional(),
    updatedDate: z.date().optional()
  })
});

export const collections = {
  knowledge
};
