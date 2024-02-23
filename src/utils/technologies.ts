export type Technology = {
   name: string
   iconSrc: string
}

type TechnologyKey =
   | "nextjs"
   | "typescript"
   | "wordpress"
   | "bricks"
   | "framer-motion"
   | "nodejs"
   | "react"

export function getTechnologies(...keys: TechnologyKey[]) {
   let technologies: Technology[] = []

   for (let key of keys) {
      switch (key) {
         case "nextjs":
            technologies.push({
               name: "Next.js",
               iconSrc: "/icons/nextjs.svg",
            })
            break
         case "typescript":
            technologies.push({
               name: "TypeScript",
               iconSrc: "/icons/typescript.svg",
            })
            break
         case "wordpress":
            technologies.push({
               name: "WordPress",
               iconSrc: "/icons/wordpress.svg",
            })
            break
         case "bricks":
            technologies.push({
               name: "Bricks",
               iconSrc: "/icons/bricks.svg",
            })
            break
         case "framer-motion":
            technologies.push({
               name: "Framer Motion",
               iconSrc: "/icons/framer-motion.svg",
            })
            break
         case "nodejs":
            technologies.push({
               name: "Node.js",
               iconSrc: "/icons/nodejs.svg",
            })
            break
         case "react":
            technologies.push({
               name: "React",
               iconSrc: "/icons/react.svg",
            })
            break
      }
   }

   return technologies
}
