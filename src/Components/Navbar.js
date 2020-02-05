import React, { useState } from 'react';
import logo from '../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [nav, setNav] = useState({
        isOpen: false
    })

    const handleToggle = () => {
        setNav({...nav, isOpen: !nav.isOpen})
    }

    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <Link to='/'>
                        <img src={logo} alt='Beach Resort' />
                    </Link>
                    <button type='button' className='nav-btn' onClick={handleToggle}>
                        <FaAlignRight className='nav-icon' />
                    </button>
                </div>
                <ul className={nav.isOpen ? "nav-links show-nav" : "nav-links" }>
                    <li> <Link to='/'> Home </Link> </li>
                    <li> <Link to='/about'> About </Link> </li>
                    <li> <Link to='/contact'> Contact </Link> </li>
                    <li> <Link to='/rooms'> Rooms </Link> </li>
                    <li> <Link to='/single-room'> SingleRooms </Link> </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;