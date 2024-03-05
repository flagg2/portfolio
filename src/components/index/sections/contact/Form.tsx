import { useState } from "react"

export default function ContactForm() {
   const [email, setEmail] = useState("")
   const [message, setMessage] = useState("")

   return (
      <form action={"/contact"} method="post">
         <label htmlFor="email">Email</label>
         <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
               setEmail(e.target.value)
            }}
            required
         />

         <label htmlFor="message">Message</label>
         <textarea
            id="message"
            name="message"
            onChange={(e) => {
               setMessage(e.target.value)
            }}
            required
         ></textarea>

         {email}
         {message}

         <button type="submit">Send</button>
      </form>
   )
}
