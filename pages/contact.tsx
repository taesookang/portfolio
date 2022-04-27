import type { NextPage } from 'next'
import Image from 'next/image'
import { ContactForm } from '../components'

const ContactPage: NextPage = () => {
  return (
    <div className="flex h-screen max-h-[900px] w-full items-center justify-center py-16">
      <div className="flex h-full flex-col gap-8 sm:h-3/4 sm:max-h-[460px] sm:flex-row">
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
            <div className="mb-1 flex items-center gap-2">
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
              <span
                onClick={() => {
                  window.open('tel: +13475411564')
                }}
                className="text-[12px] text-gray-400 hover:text-primary cursor-pointer"
              >
                1-347-541-1564
              </span>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactPage
