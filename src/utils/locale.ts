export function castLocale(astroLocale: string | undefined) {
   if (astroLocale === "en") {
      return "en"
   }
   if (astroLocale === "sk") {
      return "sk"
   }
   return "en"
}
