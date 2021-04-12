import React,{useContext,Fragment} from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

import AuthContext from '../../context/auth/authContext';
import ContactContext from "../../context/contact/contactContext";

const Navbar = (props) => {
    const authContext = useContext(AuthContext);
    const contactContext = useContext(ContactContext);
    const {isAuthenticated,logoutUser,user} = authContext;
    const {clearContact} = contactContext;

    const onLogoutHandler = (params) => {
        logoutUser();
        clearContact();
    }
    

    const authLinks = (
        <Fragment>
            <li><i class="fas fa-user-circle"></i> Hello {user && user.userName}</li>
            <li>
                <a onClick={onLogoutHandler} href='#'><i className="fas fa-sign-out-alt"></i><span className="hide-sm">Logout</span></a>
            </li>
        </Fragment>
    )

    const guestLinks = (
        <Fragment>
            <li>
                <Link to = '/login' >Login</Link>
            </li>
            <li>
                <Link to = '/aboutUs' >About Us</Link>
            </li>
        </Fragment>
    )

    return (
        <nav className = "navbar bg-primary">
            <h1>
                <i className={props.icon}/> {props.title}              
            </h1>
            <ul>
               {isAuthenticated ? authLinks : guestLinks}
            </ul>
        </nav>
    )
}

Navbar.defaultProps = {
    title : 'Contact Manager',
    icon : 'fas fa-address-book'
}

export default Navbar;