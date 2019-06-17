import React from "react"
import NetlifyForm from 'react-netlify-form'
import { Container, Form, Input, Button } from 'semantic-ui-react'

const Contact = () => {
  return (

    <Container>
      <NetlifyForm name='Contact' method='POST' netlify-honeypot="bot-field" data-netlify="true">
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
                <div>
                    <input className="input-field-sm" type='text' placeholder="Your name" name='name' required />

                    <input placeholder="jane@example.com" required />
                    <Form>  <textarea placeholder="Tell us more" required /> </Form>
                    <button class="ui button">Get in touch!</button>
                </div>
              </>
          }
        </div>
        )}
      </NetlifyForm>
    </Container>
  )
}
export default Contact


