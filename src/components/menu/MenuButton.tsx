import "./menu-button.css"

export default function MenuButton({
   menuOpen,
   setMenuOpen,
}: {
   setMenuOpen: (open: boolean) => void
   menuOpen: boolean
}) {
   return (
      <label htmlFor="check">
         <input
            type="checkbox"
            id="check"
            onChange={(e) => setMenuOpen(e.currentTarget.checked)}
            checked={menuOpen}
         />
         <span></span>
         <span></span>
         <span></span>
      </label>
   )
}
