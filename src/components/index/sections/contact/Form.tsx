import { useState } from "react"
import { Toaster, toast } from "react-hot-toast"

export default function ContactForm({
   emailPlaceholder,
   messagePlaceholder,
   send,
   success,
   error,
   loading,
}: {
   emailPlaceholder: string
   send: string
   messagePlaceholder: string
   success: string
   error: string
   loading: string
}) {
   const [email, setEmail] = useState("")
   const [message, setMessage] = useState("")

   return (
      <>
         <form
            className="w-full flex flex-col gap-4"
            onSubmit={async (e) => {
               e.preventDefault()
               toast.loading(loading)
               const result = await fetch("/api/message", {
                  method: "POST",
                  body: JSON.stringify({ email, message }),
               })

               toast.dismiss()
               if (result.ok) {
                  toast.success(success)
               } else {
                  toast.error(error)
               }
            }}
         >
            <input
               className="flex items-center rounded-lg p-3 text-md border bg-black text-text border-border"
               type="email"
               id="email"
               name="email"
               value={email}
               onChange={(e) => {
                  setEmail(e.target.value)
               }}
               placeholder={emailPlaceholder}
               required
            />

            <textarea
               className="flex items-center rounded-lg p-3 text-md borde bg-black text-text border border-border resize-none"
               id="message"
               name="message"
               value={message}
               onChange={(e) => {
                  setMessage(e.target.value)
               }}
               placeholder={messagePlaceholder}
               required
            ></textarea>

            <button
               type="submit"
               className="w-full bg-text rounded-lg text-bg p-2"
            >
               {send}
            </button>
         </form>
         <Toaster
            toastOptions={{
               position: "top-center",
               duration: 5000,
               style: {
                  marginTop: "80px",
                  background: "black",
                  color: "#f2f2f2",
                  border: "1px solid #242424",
               },
            }}
         />
      </>
   )
}
