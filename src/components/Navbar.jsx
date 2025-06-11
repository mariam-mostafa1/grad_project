import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { BsList } from "react-icons/bs";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [active, setActive] = useState('navBar');
    const [currentSection, setCurrentSection] = useState('');

    const showNav = () => {
        setActive('navBar activeNavbar');
    };

    const removeNavbar = () => {
        setActive('navBar');
    };

    useEffect(() => {
        const sections = ['Home', 'AboutUs', 'Feedback', 'HowWorks', 'Services', 'Questions', 'ContactUs'];

        const handleScroll = () => {
            let found = '';
            for (let section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        found = section;
                        break;
                    }
                }
            }
            setCurrentSection(found);
        };

        if (location.pathname === '/') {
            window.addEventListener('scroll', handleScroll);
            handleScroll(); // initial check
            return () => window.removeEventListener('scroll', handleScroll);
        } else if (location.pathname === '/Services') {
            if (location.hash === '#payment') {
                setCurrentSection('Booking');
            } else {
                setCurrentSection('Services');
            }
        } else {
            setCurrentSection('');
        }
    }, [location]);

    const handleAnchorClick = (e, sectionId) => {
        e.preventDefault();

        if (location.pathname !== '/') {
            // لو مش في الصفحة الرئيسية، ننقل الصفحة لها مع الهش
            navigate(`/#${sectionId}`);
        } else {
            // لو في الصفحة الرئيسية، نعمل scroll مباشر
            const el = document.getElementById(sectionId);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
        removeNavbar();
    };

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
                            <Link to="/" className={`navLink ${currentSection === 'Home' ? 'activeLink' : ''}`} onClick={removeNavbar}>Home</Link>
                        </li>

                        {[
                            { name: 'AboutUs' },
                            { name: 'Feedback' },
                            { name: 'HowWorks' },
                            { name: 'Questions' },
                            { name: 'ContactUs' }
                        ].map(item => (
                            <li key={item.name} className='navItem'>
                                <a
                                    href={`#${item.name}`}
                                    className={`navLink ${currentSection === item.name ? 'activeLink' : ''}`}
                                    onClick={(e) => handleAnchorClick(e, item.name)}
                                >
                                    {item.name === 'HowWorks' ? 'How Works' : item.name.replace(/([A-Z])/g, ' $1').trim()}
                                </a>
                            </li>
                        ))}

                        <li className='navItem'>
                            <Link to="/Services" className={`navLink ${currentSection === 'Services' ? 'activeLink' : ''}`} onClick={removeNavbar}>Services</Link>
                        </li>
                        <li className='navItem'>
                            <Link to="/Services#payment" className={`navLink ${currentSection === 'Booking' ? 'activeLink' : ''}`} onClick={removeNavbar}>Booking</Link>
                        </li>
                    </ul>

                    <div onClick={removeNavbar} className='closeNavbar'>
                        <IoMdCloseCircleOutline className='icon' />
                    </div>
                </div>

                <div onClick={showNav} className='toggleNavbar'>
                    <BsList className='icon' />
                </div>
            </header>
        </section>
    );
};

export default Navbar;