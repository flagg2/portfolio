// 1. Import utilities from `astro:content`
import {
   z,
   defineCollection,
   reference,
   type ImageFunction,
} from "astro:content"

const heroSchema = z.object({
   greeting: z.string(),
   typewriter: z.string().array(),
   email: z.object({
      href: z.string(),
      text: z.string(),
   }),
   openToWork: z.object({
      open: z.boolean(),
      textTrue: z.string(),
      textFalse: z.string(),
   }),
   basedIn: z.string(),
   building: z.string(),
})

// 2. Define a `type` and `schema` for each collection
const hero = defineCollection({
   type: "data", // v2.5.0 and later
   schema: heroSchema,
})

type Hero = z.infer<typeof heroSchema>

const portfolioItemSchema = ({ image }: { image: ImageFunction }) =>
   z.object({
      imageAlt: z.string(),
      image: image(),
      title: z.string(),
      description: z.string(),
      href: z.string(),
      tech: z
         .object({
            text: z.string(),
            imageAlt: z.string(),
            image: image(),
         })
         .array(),
   })

const portfolioItem = defineCollection({
   type: "data",
   schema: portfolioItemSchema,
})

type PortfolioItem = z.infer<ReturnType<typeof portfolioItemSchema>>

const portfolioSchema = z.object({
   title: z.string(),
   description: z.string(),
   items: z.array(reference("portfolioItem")),
})

const portfolio = defineCollection({
   type: "data",
   schema: portfolioSchema,
})

type Portfolio = z.infer<typeof portfolioSchema>

const testimonialItemSchema = ({ image }: { image: ImageFunction }) =>
   z.object({
      title: z.string(),
      reviewer: z.object({
         name: z.string(),
         occupation: z.string(),
         avatar: image(),
         twitterHandle: z.string(),
      }),
      company: z.object({
         logo: image(),
      }),
      text: z.string(),
   })

const testimonial = defineCollection({
   type: "data",
   schema: testimonialItemSchema,
})

type Testimonial = z.infer<ReturnType<typeof testimonialItemSchema>>

// 3. Export a single `collections` object to register your collection(s)
export const collections = { hero, portfolioItem, portfolio, testimonial }
export type { Hero, PortfolioItem, Portfolio, Testimonial }
