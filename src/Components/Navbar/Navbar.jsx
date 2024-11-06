import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='navbar'>
        <div className='container'>
            <div className="nav_row">
                <Link to={'/'} className="nav_logo"><img src="Images/Logo.png" alt="logo" /></Link>
                <div className="menu">
                    <ul>
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
                <div className="nav_button">
                    <Link className='buttonOne' to={'/'}>Sign In</Link>
                    <Link className='buttonTwo' to={'/'}>Sign Up</Link>
                </div>

            </div>
        </div>

    </nav>
    </>
  )
}

export default Navbar
