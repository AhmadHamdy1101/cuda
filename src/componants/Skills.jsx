import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const cardImagStyle = {
  
  background: 'none',
};
function Skills() {
  return (

       <section className='Skills'>
    <div className="container">
      <h1 className="black_Title">we got skills!</h1>
      <div className="line"></div>
      <p className="black_paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In exercitationem aliquam voluptatum deleniti. Excepturi</p>
      <div className="cards">
        
        <div className="card">
          
          <div className="image-card" style={ cardImagStyle}>
          <CircularProgressbar value={90} text={`90%`} styles={{
            path:{
            strokeLinecap: 'butt',
            },
            text: {
              // Text color
              fill: '#000',
              
            },}} />;
          </div>
          <h3 className='black_card_h3'>web design</h3>


        </div>
        <div className="card">
          
          <div className="image-card" style={ cardImagStyle}>
          <CircularProgressbar value={75} text={`75%`} styles={{
            path: {
              // Path color
              stroke: `#D74681`,
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'butt',

            },
    // Customize the circle behind the path, i.e. the "total progress"

    // Customize the text
            text: {
              // Text color
              fill: '#000',
              
            },
          }}/>;
          </div>
          <h3 className='black_card_h3'>web design</h3>


        </div>
        <div className="card">
          
          <div className="image-card" style={ cardImagStyle}>
          <CircularProgressbar value={70} text={`70%`} styles={{
    path: {
      // Path color
      stroke: `#15C6A8`,
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: 'butt',

    },
    // Customize the circle behind the path, i.e. the "total progress"

    // Customize the text
    text: {
      // Text color
      fill: '#000',
      
    },
  }}/>;
          </div>
          <h3 className='black_card_h3'>web design</h3>


        </div>
        <div className="card">
          
          <div className="image-card" style={ cardImagStyle}>
          <CircularProgressbar value={85} text={`85%`} styles={{
    path: {
      // Path color
      stroke: `#EC7C4A`,
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: 'butt',

    },
    // Customize the circle behind the path, i.e. the "total progress"

    // Customize the text
    text: {
      // Text color
      fill: '#000',
      
    },
  }}/>;
          </div>
          <h3 className='black_card_h3'>web design</h3>


        </div>
      
      </div>
    </div>
  </section>
    
  )
}

export default Skills