// 1. Import utilities from `astro:content`
import {
   z,
   defineCollection,
   reference,
   type ImageFunction,
} from "astro:content"

const heroSchema = ({ image }: { image: ImageFunction }) =>
   z.object({
      greeting: z.string(),
      typewriter: z.string().array(),
      avatar: image(),
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

type Hero = z.infer<ReturnType<typeof heroSchema>>

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

const technologySectionSchema = z.object({
   items: z.array(reference("technologyItem")),
   title: z.string(),
})

type TechnologySection = z.infer<typeof technologySectionSchema>

const techStackSchema = z.object({
   title: z.string(),
   description: z.string(),
   frontend: technologySectionSchema,
   backend: technologySectionSchema,
   fullstack: technologySectionSchema,
   wordpress: technologySectionSchema,
})

const techStack = defineCollection({
   type: "data",
   schema: techStackSchema,
})

type TechStack = z.infer<typeof techStackSchema>

const technologyItemSchema = ({ image }: { image: ImageFunction }) =>
   z.object({
      logo: image(),
      logoAlt: z.string(),
      title: z.string(),
   })

type Technology = z.infer<ReturnType<typeof technologyItemSchema>>

const technologyItem = defineCollection({
   type: "data",
   schema: technologyItemSchema,
})

const teamMemberSchema = ({ image }: { image: ImageFunction }) =>
   z.object({
      name: z.string(),
      role: z.string(),
      avatar: image(),
      avatarAlt: z.string(),
   })

type TeamMember = z.infer<ReturnType<typeof teamMemberSchema>>

const teamMember = defineCollection({
   type: "data",
   schema: teamMemberSchema,
})

const teamSchema = z.object({
   title: z.string(),
   description: z.string(),
   members: z.array(reference("teamMember")),
})

type Team = z.infer<typeof teamSchema>

const team = defineCollection({
   type: "data",
   schema: teamSchema,
})

const contactSchema = ({ image }: { image: ImageFunction }) =>
   z.object({
      title: z.string(),
      description: z.string(),
      formT: z.object({
         emailPlaceholder: z.string(),
         messagePlaceholder: z.string(),
         send: z.string(),
         success: z.string(),
         error: z.string(),
         loading: z.string(),
      }),
      socials: z.array(
         z.union([
            z.object({
               title: z.string(),
               href: z.string(),
               emoji: z.string(),
            }),
            z.object({
               title: z.string(),
               href: z.string(),
               image: image(),
               imageAlt: z.string(),
            }),
         ]),
      ),
   })

const contact = defineCollection({
   type: "data",
   schema: contactSchema,
})

type AstroImage = {
   src: string
   width: number
   height: number
   format: "avif" | "png" | "webp" | "jpeg" | "jpg" | "svg" | "tiff" | "gif"
}

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
   hero,
   portfolioItem,
   portfolio,
   testimonial,
   techStack,
   technologyItem,
   teamMember,
   team,
   contact,
}
export type {
   Hero,
   PortfolioItem,
   Portfolio,
   Testimonial,
   TechStack,
   Technology,
   TechnologySection,
   TeamMember,
   Team,
   AstroImage,
}
