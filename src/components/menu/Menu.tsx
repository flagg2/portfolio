import { useEffect, useState } from "react"
import MenuButton from "./MenuButton"
import { twMerge } from "tailwind-merge"
import useCurrentEmoji from "./hooks/useCurrentEmoji"

export default function Menu({
   t,
   locale,
}: {
   t: {
      portfolio: string
      techStack: string
      team: string
      contact: string
   }
   locale: "sk" | "en"
}) {
   const [menuOpen, setMenuOpen] = useState(false)
   const emoji = useCurrentEmoji()

   useEffect(() => {
      console.log("menuOpen", menuOpen)
   }, [menuOpen])

   const closeMenu = () => {
      setMenuOpen(false)
   }

   return (
      <div className="fixed inset-x-0 z-10 top-6 flex justify-center pointer-events-none">
         <nav className="w-full container mx-auto">
            <div className="flex justify-between p-4 backdrop-blur-md rounded-lg bg-menu-bg items-center  pointer-events-auto">
               <div className="text-3xl">{emoji}</div>
               <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </div>
            <div
               className={twMerge(
                  "flex gap-4 flex-col justify-center p-4 backdrop-blur-md rounded-lg bg-menu-bg transition-all mt-2",
                  menuOpen ? "pointer-events-auto" : "opacity-0",
               )}
            >
               <MenuItem
                  emoji="🧙"
                  text={t.portfolio}
                  href="#portfolio"
                  onClick={closeMenu}
               />
               <MenuItem
                  emoji="🔧"
                  text={t.techStack}
                  href="#tech-stack"
                  onClick={closeMenu}
               />
               <MenuItem
                  emoji="♾️"
                  text={t.team}
                  href="#team"
                  onClick={closeMenu}
               />
               <MenuItem
                  emoji="🤝"
                  text={t.contact}
                  href="#contact"
                  onClick={closeMenu}
               />
               <LocaleSwitcher locale={locale} />
            </div>
         </nav>
      </div>
   )
}

function MenuItem({
   emoji,
   text,
   href,
   onClick,
}: {
   emoji: string
   text: string
   href: string
   onClick?: () => void
}) {
   return (
      <a href={href} onClick={onClick} className="font-bold flex items-center">
         <div className="text-2xl mr-2">{emoji}</div>
         <div>{text}</div>
      </a>
   )
}

// TODO: Enough for now, if more pages are added, we can refactor this to be more dynamic
function LocaleSwitcher({ locale }: { locale: "sk" | "en" }) {
   const emoji = locale === "sk" ? "🇬🇧" : "🇸🇰"
   const text = locale === "sk" ? "English" : "Slovensky"
   const href = locale === "sk" ? "/" : "/sk"
   return <MenuItem emoji={emoji} text={text} href={href} />
}
