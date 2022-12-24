import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <div className='container-fluid bg-dark'>
            <div className='container'>
                <nav>
                    <ul className='myNavi'>
                        <NavLink to="/">
                            <li>Home </li>
                        </NavLink>
                        <NavLink to="/productlisting">
                            <li>Products</li>
                        </NavLink>
                        <NavLink to="/register">
                            <li>User Register</li>
                        </NavLink>
                        <NavLink to="/adminregister">
                            <li>Register as Admin</li>
                        </NavLink>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;