import React from 'react'

function Services() {
  return (
      <section className='Services'>
        <div className="container">
          <h1 className='white_Title'>Services we provide</h1>
          <div className="line"></div>
          <p className='white_Paragraph'>we are working with both individuals and businesses from all over the globe <br/> to create awesome websites and applications.</p>
          <div className="cards">
            <div className="card">
            <img src={process.env.PUBLIC_URL + '/image/branding.png'} alt="branding" />
            <h3 className='white_card_h3'>branding</h3>
            <p className='white_card_p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi sint facilis saepe exercitationem velit id in ex</p>

            </div>

            <div className="card">
            <img src={process.env.PUBLIC_URL + '/image/Design.png'} alt="Design" />
            <h3 className='white_card_h3'>Design</h3>
            <p className='white_card_p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi sint facilis saepe exercitationem velit id in ex</p>

            </div>
            <div className="card">
            <img src={process.env.PUBLIC_URL + '/image/development.png'} alt="develoment" />
            <h3 className='white_card_h3'>develoment</h3>
            <p className='white_card_p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi sint facilis saepe exercitationem velit id in ex</p>

            </div>
            <div className="card">
            <img src={process.env.PUBLIC_URL + '/image/Rocket-science.png'} alt="rocket science" />
            <h3 className='white_card_h3'>rocket science</h3>
            <p className='white_card_p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi sint facilis saepe exercitationem velit id in ex</p>

            </div>
          </div>
        </div>

      </section>
  )
}

export default Services