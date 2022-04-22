import type { NextPage } from 'next'
import { useState, useRef, FormEvent } from 'react'
import Image from 'next/image'
import emailjs from '@emailjs/browser'

const ContactPage: NextPage = () => {
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
    <div className="flex h-screen max-h-[900px] w-full items-center justify-center py-16">
      <div className="flex h-3/4 max-h-[460px] gap-8">
        <div className="flex h-full w-[360px] items-center ">
          <div className="w-full px-4">
            <span className="text-[32px] font-semibold tracking-wide text-primary">
              Drop me a line!
            </span>
            <p className="font-medium text-secondary/70 ">
              I'd love to hear from you.
            </p>
            <p className="border-b border-gray-200 py-4 pr-2 text-sm leading-6 text-gray-400">
              Would you like to discuss a potential project? Maybe you just want
              to stop in and say hi? You can send me a message using this
              contact form, or reaching me using the information below
            </p>
            <p className="pt-4 pb-2 font-medium text-secondary/70">
              Contact Information
            </p>
            <div className="flex items-center gap-2 mb-1">
              <Image src="/images/mail.svg" width={24} height={24} />
              <a
                href="mailto: tarrak123@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] text-gray-400 hover:text-primary"
              >
                tarrak123@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/images/phone.svg" width={24} height={24} />
              <span className="text-[12px] text-gray-400">1-347-541-1564</span>
            </div>
          </div>
        </div>
        <div className="card flex h-full w-[360px] items-center justify-center px-6">
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
        <div></div>
      </div>
    </div>
  )
}

export default ContactPage;
