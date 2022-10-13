import React from 'react'
import MainNav from './navbar/MainNav';




function Header() {

  
  return (
    <div>
      <div className='NavBar'>
      <div className='container'>
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="cuda" />


        <MainNav/>

        
        

      </div>
    </div>
    </div>
  )
}

export default Header