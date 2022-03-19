import React, { useState, useRef } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";
import Nav from '../../components/nav';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bdffdem",
        "template_9zl7qsw",
        form.current,
        "user_KIP4sbmL9itetpkyz3R88"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setTimeout(() => {
      setSubmitted(true);
    }, 200);
  };

  return (
    <>
    <Nav />
      <div className="min-h-full flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        {/* <Image
          className="object-cover absolute shadow-md brightness-50 object-right"
          src="https://res.cloudinary.com/wrp/image/upload/v1642146255/winnie/bmw/BMW340i_9_hh9jcw.jpg"
          width={6}
          height={9}
          layout="fill"
        /> */}
        {submitted ? (
          <>
            <div className="py-24 text-3xl z-10 text-black top-16">
              Thank you! We'll be in touch soon.
            </div>
          </>
        ) : (
          <div className="max-w-md w-full absolute top-16 space-y-10 z-10 p-12 m-12 sm:bg-inherit">
            <div>
              <h2 className="mt-6 text-center text-4xl text-black">
                Contact me
              </h2>
            </div>
            <form
              ref={form}
              className="mt-8 space-y-6"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Subject"
                  />
                </div>
                <br />
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Name"
                  />
                </div>
                <br />
                <div>
                  <label htmlFor="password" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email"
                  />
                </div>
                <br />
                <div>
                  <label htmlFor="password" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Message"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#4AB1A1] hover:bg-[#398a7e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                  Send
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
