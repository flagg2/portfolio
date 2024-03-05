export function useTranslatePath(locale: "sk" | "en") {
   return (path: string) => {
      if (locale === "en") {
         return path
      }
      return `/${locale}${path}`
   }
}
