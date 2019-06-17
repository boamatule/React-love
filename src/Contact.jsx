import React from "react"
import NetlifyForm from 'react-netlify-form'

const Contact = () => {
  return (
    <NetlifyForm name='Contact'>
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
              <div className="contact-form-wrapper">
                  <input className="input-field-sm" type='text' placeholder="Your name" name='name' required />

                  <input class="bg-white focus:outline-0 focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="email" placeholder="jane@example.com" required />
                  <textarea className="input-field" placeholder="Your message" name='message' required />
                  <button className="button">Get in touch!</button>
              </div>
            </>
        }
      </div>
      )}
    </NetlifyForm>
  )
}
export default Contact


