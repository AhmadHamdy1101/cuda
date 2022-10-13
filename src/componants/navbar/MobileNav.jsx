import React, {useState} from 'react'
import Navlink from './Navlink'

function MobileNav() {
    const [open, setOpen] = useState(false);

    const Close = () => setOpen(false);
  return (
    <nav className='mobileNav' id='nav' >
               <span className="manu"  id='menu' onClick={()=> setOpen(!open)} >
        <i className="fa-solid fa-bars"></i>
        </span>
        {open && <Navlink isMobile={true} Close={Close}/>}
  </nav>
  )
}

export default MobileNav