import React, {useState, useEffect} from "react"
import {Link} from 'react-router-dom'
import { Turn as Hamburger } from 'hamburger-react'
import './Navbar.css';
import {Button} from './Button';


function Navbar(){
    const[click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

    useEffect(()=> {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);
    return (
        <>
        <nav className="navbar" >
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                <img src="/images/img-1.jpeg" alt="Refyne logo" className="logo-image" />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <Hamburger toggled={click} toggle={setClick} />
                </div>
                <ul className={click? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about-us' className="nav-links" onClick={closeMobileMenu}>
                            About us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/learn-more' className="nav-links" onClick={closeMobileMenu}>
                            Learn more
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
        </>
    )
}
export default Navbar



