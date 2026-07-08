import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const departments = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    headOfDepartment: z.string(),
    courses: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});





const faculty = z.object({
  name: z.string(),
  role: z.string(),
  department: z.string(),
  email: z.string().email(),
  image: z.string(),
});

const galleryImage = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  category: z.string(),
});

const data = defineCollection({
  type: 'data',
  schema: z.union([z.array(faculty), z.array(galleryImage)]),
});

export const collections = {
  pages,
  departments,
  
  
  data,
};
