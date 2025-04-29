import React, { useState } from 'react';
import '../styles/navbar.css';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { BsList } from "react-icons/bs";


const Navbar = () => {
    const [active, setActive] = useState('navBar')
    // function to toggle navBar
    const showNav = () => {
        setActive('navBar activeNavbar')
    }
    // function to remove navBar
    const removeNavbar = () => {
        setActive('navBar')
    }
    return (
        <section className='navBarSection'>
        <header className='header flex'>
            <div className='lavo'>
            <h1 style={{
                        background: "linear-gradient(to right, #303949  90%, #7389AF  )",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontSize: "30px",
                        fontWeight: "1500",
            
                    }}>LAVO</h1>
            </div>

            <div className={active}>
                <ul className='navLists flex'>
                    <li className='navItem'>
                        <a href='#Home' className='navLink'>Home</a>
                    </li>

                    <li className='navItem'>
                        <a href='#AboutUs' className='navLink'>About Us</a>
                    </li>

                    <li className='navItem'>
                        <a href='#Feedback' className='navLink'>Feedback</a>
                    </li>

                    <li className='navItem'>
                        <a href='#HowWorks' className='navLink'>How Works</a>
                    </li>

                    <li className='navItem'>
                        <a href='a' className='navLink'>Services</a>
                    </li>

                    <li className='navItem'>
                        <a href='#Questions' className='navLink'>Asked Questions</a>
                    </li>

                    <li className='navItem'>
                        <a href='#ContactUs' className='navLink'>Contact Us</a>
                    </li>

                    <li className='navItem'>
                        <a href='a' className='navLink'>Booking</a>
                    </li>
                </ul>
                
                <div onClick={removeNavbar} className='closeNavbar'>
                    <IoMdCloseCircleOutline className='icon' />
                </div>
                    
                    
            </div>

            <div onClick={showNav} className='toggleNavbar'>
                <BsList className='icon'/>
            </div>
                

        </header>
        </section>
    )
}

export default Navbar;