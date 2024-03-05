import type { APIRoute } from "astro"

export const prerender = false

const { SG_API_KEY } = import.meta.env

export const POST: APIRoute = async ({ request }) => {
   const body = await request.json()
   const { email, message } = body

   if (email === undefined || message === undefined) {
      return new Response("Bad request", { status: 400 })
   }

   const sendGridResponse = await fetch(
      "https://api.sendgrid.com/v3/mail/send",
      {
         method: "POST",
         headers: {
            Authorization: `Bearer ${SG_API_KEY}`,
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            personalizations: [
               {
                  to: [{ email: "samo.wittlinger@gmail.com" }],
                  subject: "New Contact Form Message",
               },
            ],
            from: { email: "form@tricks.sk", name: "Tricks" },
            content: [
               {
                  type: "text/plain",
                  value: `New Message! \n\n Email: ${email}\n\n${message}`,
               },
            ],
         }),
      },
   )

   if (sendGridResponse.ok) {
      return new Response("OK", { status: 200 })
   } else {
      const errorResult = await sendGridResponse.text() // Or .json() if response is JSON.
      return new Response(errorResult, { status: 500 })
   }
}
