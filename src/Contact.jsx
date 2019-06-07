import React from "react"

const Contact = () => {
  return (
    <div class="container mx-auto px-4 .bg-black max-width: 500px">

      <h1 align="center">Get in touch!</h1> 

        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />

              <div className="flex items-center justify-center">
                <input className="shadow appearance-none border none w-full py-2 px-1 text-grey-darker leading-tight focus:outline-none" type="text"name="name" placeholder="Name" required />
              </div>


              <div className="flex items-center justify-center">
                <input className="shadow appearance-none border none w-full py-2 px-1 text-grey-darker leading-tight focus:outline-none" type="text"name="email" placeholder="Email" required />
              </div>

            <div>
            <textarea className="shadow appearance-none border none w-full py-2 px-1 text-grey-darker mb-3 leading-tight focus:outline-none" name="message" placeholder="Message"required/>
            <button className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 none focus:outline-none focus:shadow-outline justify-center" type="submit">Submit</button>
          </div>
      </form>
    </div> 
  )
}

export default Contact 