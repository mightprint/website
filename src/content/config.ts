import { defineCollection, z } from "astro:content";

const products = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    overview: z.string().optional(),

    category: z.enum(["flexible-packaging", "paper-box", "labels"]),
    productType: z.string(),

    heroImage: z.string().optional(),

    features: z.array(z.string()).optional(),
    applications: z.array(z.string()).optional(),
    materials: z.array(z.string()).optional(),
    moq: z.string().optional(),
    leadTime: z.string().optional(),

    technicalSpecs: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
        })
      )
      .optional(),

    seoTitle: z.string(),
    seoDescription: z.string(),
  }),
});

const knowledge = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["flexible", "printing", "compliance"]),
    articleType: z
      .enum([
        "guide",
        "comparison",
        "material",
        "process",
        "compliance",
        "cost",
        "case-study",
      ])
      .optional(),
    relatedProducts: z.array(z.string()).optional(),
    publishDate: z.date().optional(),
    updatedDate: z.date().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

export const collections = {
  products,
  knowledge,
};
