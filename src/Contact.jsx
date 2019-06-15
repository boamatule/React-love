import React from "react"
import NetlifyForm from 'react-netlify-form'
<<<<<<< HEAD


const Contact = () => {
  return (
    <NetlifyForm name='contact'>
=======

const Contact = () => {
  return (
    <NetlifyForm name='Contact'>
>>>>>>> 3c58d0335a14287ba204db756b611ac577f7ce9a
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
<<<<<<< HEAD
            <>
              <div className="contact-form-wrapper">
                  <input className="input-field-sm" type='text' placeholder="Your name" name='name' required />
                  <input className="input-field-sm" type='email' placeholder="Your email address" name='email' required />
                  <textarea className="input-field" placeholder="Your message" name='message' required />
                  <button className="button">Get in touch!</button>
              </div>
            </>
        }
      </div>
=======
                <>  
                  <h1 className="content-header" align="center">Get in touch</h1>
                    <div className="flex items-center justify-center">
                      <input className="shadow appearance-none border none w-full py-2 px-1 text-grey-darker leading-tight focus:outline-none" type="text" name="name" placeholder="Name" required />
                    </div>
                    <div className="flex items-center justify-center">
                      <input className="shadow appearance-none border none w-full py-2 px-1 text-grey-darker leading-tight focus:outline-none" type="email" name="email" placeholder="Email" required />
                    </div>
                    <div>
                      <textarea className="shadow appearance-none border none w-full py-2 px-1 text-grey-darker mb-3 leading-tight focus:outline-none" name="message" placeholder="Message" required/>
                      <button className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 none focus:outline-none focus:shadow-outline justify-center" type="submit">Submit</button>
                    </div>
              </>
          }
        </div>
>>>>>>> 3c58d0335a14287ba204db756b611ac577f7ce9a
      )}
    </NetlifyForm>
  )
}
export default Contact


