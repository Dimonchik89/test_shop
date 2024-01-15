import { ICart, IFormValues } from "@/types/types";

export const emailTemplate = ({ values, cart }: { values: IFormValues, cart: ICart[] }) => {
    return JSON.stringify({
        "bodyText": "Congratulation, you just sent email with mailtarget. You are truly awesome!",
        "bodyHtml": `<!DOCTYPE html>
                  <html lang='en'>
                    <head>
                      <meta charset='UTF-8'>
                      <title>New Order</title>
                    </head>
                    <body>
                      <p>Email: ${values.email}</p>
                      <p>Name: ${values.name}</p>
                      <p>Phone: ${values.tel}</p>

                      ${cart.map(item => `
                        <div>
                          <p>ID: ${item.id}</p>
                          <p>TITLE: ${item.title}</p>
                          <p>Quantity: ${item.quantity}</p>
                          <p>Price: ${item.price}</p>
                        </div>
                      `)}
                    </body>
                  </html>`,
        "from": {
            "email": "default@sandbox.mailtarget.co",
            "name": "mailtarget Sandbox"
        },
        "subject": "Hello from mailtarget",
        "to": [
            {
                "email": "rvk70635@zslsz.com",
                "name": ""
            }
        ]
    });
}