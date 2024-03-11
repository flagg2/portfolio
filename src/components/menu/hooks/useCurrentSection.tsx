import { useState, useEffect } from "react"

export default function useCurrentSection(
   orderedSectionIds: string[],
   defaultSection = "hero",
) {
   const [currentSection, setCurrentSection] = useState<string>(defaultSection)

   useEffect(() => {
      const handleScroll = () => {
         const elements = orderedSectionIds
            .map((id) => {
               const section = document.getElementById(id)
               return section ?? null
            })
            .filter((section) => section !== null) as HTMLElement[]

         for (let i = elements.length - 1; i >= 0; i--) {
            const distance = elements[i].getBoundingClientRect().top
            const isBelowTop = distance < window.innerHeight * 0.4

            if (isBelowTop) {
               setCurrentSection(orderedSectionIds[i])
               return
            }
         }
      }

      window.addEventListener("scroll", handleScroll)
      handleScroll() // Initialize the section based on current scroll position

      return () => {
         window.removeEventListener("scroll", handleScroll)
      }
   }, [orderedSectionIds, defaultSection])

   return currentSection
}
