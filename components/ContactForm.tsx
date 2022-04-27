import React, { useState, useRef, FormEvent } from 'react'
import emailjs from '@emailjs/browser'

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const form = useRef<HTMLFormElement | null>(null)

  const sendEmail = (e: FormEvent) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_ACCESS_KEY
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div className="card flex h-full min-h-[400px] w-[360px] items-center justify-center px-6">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex w-full flex-col items-center "
      >
        <div className="w-full">
          <label htmlFor="#name">Name</label>
          <input
            id="name"
            type="text"
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="w-full">
          <label htmlFor="#email">Email</label>
          <input
            id="email"
            type="email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="w-full">
          <label htmlFor="#message">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn mt-4 w-40">
          Send
        </button>
      </form>
    </div>
  )
}

export default ContactForm
