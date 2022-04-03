import React from 'react'
import { Link, Router, BrowserRouter } from 'react-router-dom'
import aquisLogo from '../assets/aquisLogo.svg'

const Navbar = () => {
    return (
        <>
        <BrowserRouter>
        <div className='navbar'>
            <ul>
                <li>
                    <Link to='/' className='nav-logo'>
                        <img
              src={aquisLogo}
              alt='Aquis Exchange logo'
              style={{ height: '50px', width: '200px' }}
            />
            {/* <span>Logo</span> */}
                    </Link>
                </li>
                <li>
                    <Link to='/about'>
                        <span>About</span>
                    </Link>
                </li>
                <li>
                    <Link to='/aquis-exchange'>
                        <span>Aquis Exchange</span>
                    </Link>
                </li>
                <li>
                    <Link to='/aquis-stock-exchange'>
                        <span>Aquis Stock Exchange</span>
                    </Link>
                </li>
                <li>
                    <Link to='/aquis-technology'>
                        <span>Aquis Technology</span>
                    </Link>
                </li>
                <li>
                    <Link to='/investors'>
                        <span>Investors</span>
                    </Link>
                </li>
                <li>
                    <Link to='/news'>
                        <span>News</span>
                    </Link>
                </li>
                <li>
                    <Link to='/contact'>
                        <span>Contact</span>
                    </Link>
                </li>
            </ul>
        </div>
        </BrowserRouter>
        </>
    )
}

export default Navbar
