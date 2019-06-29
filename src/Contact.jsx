import React from "react"
import NetlifyForm from 'react-netlify-form'

const Contact = () => {
  return (
    <div className="shadow-md px-8 pt-4 pb-8 mb-4">
      <h1>Get in Touch</h1>
        <NetlifyForm name='Contact' method='POST' netlify-honeypot="bot-field" data-netlify="true" >
          {({ loading, error, success }) => (
            <div>
              {loading &&
                <div>Loading...</div>
              }
              {error &&
                <div>Your information was not sent. Please try again later.</div>
              }
              {success &&
                <div>Thank you for contacting us!</div>
              }
              {!loading && !success &&
                <>
                <form class="w-full max-w-lg">
                  <div class="flex flex-wrap -mx-3 mb-6">
                    
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <input class="appearance-none block w-full bg-white-200 text-gray-700 border border-blue-500 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type='text' placeholder="Your name" name='name' required />
                    </div>

                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <input class="appearance-none block w-full bg-white-200 text-gray-700 border border-blue-500 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type='email' placeholder="Your email address" name='email' required />
                    </div>

                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <textarea class="appearance-none block w-full bg-white-200 text-gray-700 border border-blue-500 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" placeholder="Your message" name='message' required />
                    </div>

                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 flex items-center justify-center">
                      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent">Send</button>
                    </div>
                  </div>

                </form>   
                </>
            }
          </div>
          )}
        </NetlifyForm>
    </div>
  )
}
export default Contact