import { TypeGrid } from "@flagg2/typegrid"
import type { APIRoute } from "astro"

const { SG_API_KEY } = import.meta.env

const tg = TypeGrid.createSync({
   apiKey: SG_API_KEY,
   sender: {
      email: "form@tricks.sk",
      name: "Tricks",
   },
})

export const POST: APIRoute = async ({ request }) => {
   const body = await request.json()
   const { email, message } = body

   if (email === undefined || message === undefined) {
      return new Response("Bad request", { status: 400 })
   }

   const result = await tg.sendPlain({
      content: {
         type: "text/plain",
         value: `New Message! \n\n Email: ${email}\n\n${message}`,
      },
      subject: "New Contact Form Message",
      personalizations: [
         {
            to: "samo.wittlinger@gmail.com",
         },
      ],
   })

   if (result.isOk()) {
      return new Response("OK", { status: 200 })
   } else {
      result.log()
      return new Response("Internal Server Error", { status: 500 })
   }
}
