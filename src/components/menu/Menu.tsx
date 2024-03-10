import { useEffect, useState } from "react"
import MenuButton from "./MenuButton"
import { twMerge } from "tailwind-merge"

export default function Menu({
   t,
}: {
   t: {
      portfolio: string
      techStack: string
      team: string
      contact: string
   }
}) {
   const [menuOpen, setMenuOpen] = useState(false)

   useEffect(() => {
      console.log("menuOpen", menuOpen)
   }, [menuOpen])

   const closeMenu = () => {
      setMenuOpen(false)
   }

   return (
      <div className="fixed inset-x-0 z-10 top-6 flex justify-center">
         <nav className="w-full container mx-auto">
            <div className="flex justify-between p-4 backdrop-blur-md rounded-lg bg-menu-bg items-center">
               <div className="text-3xl">🧙</div>
               <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </div>
            <div
               className={twMerge(
                  "flex gap-4 flex-col justify-center p-4 backdrop-blur-md rounded-lg bg-menu-bg transition-all mt-2",
                  !menuOpen && "opacity-0 pointer-events-none",
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
      <a href={href} onClick={onClick}>
         <span className="text-2xl mr-2">{emoji}</span>
         {text}
      </a>
   )
}
