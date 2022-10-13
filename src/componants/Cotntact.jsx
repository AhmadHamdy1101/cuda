import React from 'react'

function Cotntact() {
  return (
    <section className="contact">
      <div className="container">
          <h1 className='white_Title'>GET IN TOUCH</h1>
          <div className="line"></div>
          <p className='white_Paragraph'>1600 Pennsylvania Ave NW , Washington , DC 20500 , United States of America . Tel : ( 202 ) 456-1111</p>
          <form className='contact-form' action="">
            <div className="form-group">
              <input type="text" name='name' placeholder='your name *' />
              <input type="text" name='email' placeholder='your Email *' />
            </div>
            <textarea name="message" id=""  rows="10" placeholder='your message *'></textarea>
            <div className="button"> 
               <button type="submit">send message</button>
            </div>
          </form>
      </div>
    </section>
  )
}

export default Cotntact