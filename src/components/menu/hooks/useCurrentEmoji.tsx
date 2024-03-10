import useCurrentSection from "./useCurrentSection"

export default function useCurrentEmoji() {
   const sectionIds = [
      "hero",
      "portfolio",
      "first-testimonial",
      "tech-stack",
      "second-testimonial",
      "team",
      "contact",
   ]
   const currentSection = useCurrentSection(sectionIds)

   switch (currentSection) {
      case "hero":
         return "👋"
      case "portfolio":
         return "🧙"
      case "tech-stack":
         return "🛠️"
      case "team":
         return "♾️"
      case "contact":
         return "🤝"
      case "first-testimonial":
      case "second-testimonial":
         return "✍️"
      default:
         return "🧙"
   }
}
