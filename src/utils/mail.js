import { ServerClient } from 'postmark'

export const transport = new ServerClient("b0c4737e-0164-4122-8e32-c904a97f9931");

// client.sendEmail({
//   "From": "team@shortstories.io",
//   "To": "team@shortstories.io",
//   "Subject": "Test",
//   "TextBody": "Hello from Postmark!"
// })

export const makeANiceEmail = text => `
  <div className="email" style="
    border: 1px solid black;
    padding: 20px;
    font-family: sans-serif;
    line-height: 2;
    font-size: 20px;
  ">
    <h2>Hello There!</h2>
    <p>${text}</p>
    <p>😘, Shortstories team</p>
  </div>
`
