import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            <Link to='/register-rbs'>RegisterRBS</Link>
            <Link to='/register-bs'>RegisterBS</Link>
            <Link to='/register__1'>Register_-_1</Link>
            <Link to='/login__1'>Login_-_1</Link>
        </nav>
    );
};

export default Header;