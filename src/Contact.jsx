import React from "react"
import NetlifyForm from 'react-netlify-form'

const Contact = () => {
  return (
    <div class="container background-color: #553c9a  mx-auto px-4 .bg-black max-width: 500px">

      <h1 align="center">Get in touch!</h1> 


    <NetlifyForm name='Contact Form'>
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
            <div>
              <div className="flex items-center justify-center">
                <input className="shadow appearance-none border none w-full py-1 px-1 text-grey-darker leading-tight focus:outline-none" type="text"name="email" required />
              </div>

            <textarea className="shadow appearance-none border none w-full py-2 px-1 text-grey-darker mb-3 leading-tight focus:outline-none" name="message" required/>
            <button className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 none focus:outline-none focus:shadow-outline justify-center" type="submit">Submit</button>
          </div>
          }
        </div>
      )}
  </NetlifyForm>

  </div>
  )
}

export default Contact 