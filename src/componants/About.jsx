import React from 'react'


function About() {
  return (
    <section className="about_us">
      <div className="container">
      <h1 className='white_Title'>WHAT POEPLE SAY ABOUT US</h1>
          <div className="line"></div>
          <p className='white_Paragraph'> Our clients love us !</p>
        <div className="cards">
          <div className="card">
            <div className="left-card">
              <div className="left-card_img">
              <img src="" alt="" />
              </div>
            </div>
            <div className="right-card">
            <p className='white_card_p'>" Nullam dapibus blandit orci , viverra
gravida dui lobortis eget . Maecenas
fringilla urna eu nisl scelerisque . "</p>
            <h3 className='white_card_h3'>chanel iman</h3>
            <span>CEO of Pintrest</span>

            </div>
          </div>
          <div className="card">
            <div className="left-card">
              <div className="left-card_img">
              <img src="" alt="" />
              </div>
            </div>
            <div className="right-card">
            <p className='white_card_p'>" Vivamus luctus urna sed urna ultricies
            ac tempor dui sagittis . In condimentumfacilisis porta . "</p>
            <h3 className='white_card_h3'>ADRIANA LIMA</h3>
            <span>Founder of Instagram</span>

            </div>
          </div>
          <div className="card">
            <div className="left-card">
              <div className="left-card_img">
              <img src="" alt="" />
              </div>
            </div>
            <div className="right-card">
            <p className='white_card_p'>" Vivamus luctus urna sed urna ultricies
ac tempor dui sagittis . In condimentum
facilisis porta . "

</p>
            <h3 className='white_card_h3'>ANNE HATHAWAY</h3>
            <span>Lead Designer at Behance</span>

            </div>
          </div>
          <div className="card">
            <div className="left-card">
              <div className="left-card_img">
              <img src="" alt="" />
              </div>
            </div>
            <div className="right-card">
            <p className='white_card_p'>" Phasellus non purus vel arcu tempor
commodo . Fusce semper , purus vel luctus
molestie , risus sem cursus neque . "

</p>
            <h3 className='white_card_h3'>EMMA STONE</h3>
            <span>Co - Founder of Shazam</span>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About