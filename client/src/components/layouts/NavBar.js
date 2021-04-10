import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

const Navbar = (props) => {
    return (
        <nav className = "navbar bg-primary">
            <h1>
                <Link to = '/' >
                    <i className={props.icon}/> {props.title}
                </Link>
            </h1>
            <ul>
                <li>
                    <Link to = '/' >Home</Link>
                </li>
                <li>
                    <Link to = '/aboutUs' >About Us</Link>
                </li>
                <li>
                    <Link to = '/login' >Login</Link>
                </li>
            </ul>
        </nav>
    )
}

Navbar.defaultProps = {
    title : 'Contact Manager',
    icon : 'fas fa-address-book'
}

export default Navbar;