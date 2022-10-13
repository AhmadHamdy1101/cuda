import React from 'react'
import { NavLink } from 'react-router-dom'
function Navlink(props) {
  return (
    
    <ul>
    <li onClick={() => props.isMobile && props.Close()}>
    <NavLink to="/" >Home</NavLink>
    </li>
        <li onClick={() => props.isMobile && props.Close()}>
    <NavLink to="/Portifolio">Portifolio</NavLink>
    </li>
        <li onClick={() => props.isMobile && props.Close()}>
    <NavLink to="/About">About</NavLink>
    </li>
        <li onClick={() => props.isMobile && props.Close()}>
    <NavLink to="/Skills">Skills</NavLink>
    </li>
        <li onClick={() => props.isMobile && props.Close()}>
    <NavLink to="/Team">Team</NavLink>
    </li>
        <li onClick={() => props.isMobile && props.Close()}>
    <NavLink to="/Cotntact">contact</NavLink>
    </li>
    </ul>

  )
}

export default Navlink