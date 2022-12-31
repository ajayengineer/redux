import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <div className='container-fluid bg-dark'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <NavLink to="/"><h1>Bank App</h1></NavLink>
                    </div>
                    <div className='col-md-9'>
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


            </div>
        </div>
    )
}

export default Header;