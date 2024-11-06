import React, { useState } from 'react'
import './MobiNav.css'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";


const MobiNav = () => {
  // =========== useState hook for dynamic menu
  const [visible, setVisible] = useState(false)


  return (
    <>
    <nav className='mobNav'>
        <div className="container">
            <div className="mobMenu_row">
                <Link className="mobMenu_logo"><img src="Images/Logo.png" alt="Logo" /></Link>
                <div className="menu_bar">
                  <div onClick={()=>setVisible(!visible)} className="menu_icon">
                  <FaBars />
                  </div>
                </div>
            </div>
            {
              visible &&
              <div className="menu_toggol">
              <ul className="menu_text">
                   <li>
                      <Link to={'#'}>About</Link>
                    </li>
                    <li>
                        <Link to={'#'}>Features</Link>
                    </li>
                    <li>
                        <Link to={'#'}>Pricing</Link>
                    </li>
                    <li>
                        <Link to={'#'}>Testimonials</Link>
                    </li>
                    <li>
                        <Link to={'#'}>Help</Link>
                    </li>
                  </ul>

              </div>
               
            }
            <div className="mob_button">
                    <Link className='btnOne' to={'/'}>Sign In</Link>
                    <Link className='btnTwo' to={'/'}>Sign Up</Link>
                </div>
            
        </div>
    </nav>
    </>
  )
}

export default MobiNav
