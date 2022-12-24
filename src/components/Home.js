import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserLogin from '../UserDashboard/UserLoginForm';
import AdminLogin from '../AdminDashboard/AdminLoginForm';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const user = useSelector(state => state.allUsers.user)
    const adminuser = useSelector(state => state.allAdminUsers.adminuser)
    const dispatch = useDispatch();
    const dispatchAdmin = useDispatch();

    return (
        <div className="container-fluid">
            <div className='container'>
                <div className='row d-flex flex-row  justify-content-evenly'>
                    <div className='col-md-5 card bg-warning'>
                        {
                            user ?
                                <div className='d-flex flex-column align-items-center'>
                                    <h2 className='text-dark text-center py-2'>User Already Logged In</h2><br />
                                    <input
                                        className='col-md-4 btn btn-danger my-3 align-items-center'
                                        type="button"
                                        value="Logout"
                                        onClick={() => dispatch({ type: 'LOGOUT' })} />
                                    <NavLink to="/dashboarduser" className='col-md-4 btn btn-success my-3 align-items-center'>User Account</NavLink>
                                </div>

                                : <UserLogin />
                        }

                    </div>
                    <div className='col-md-5 card bg-info'>
                        {
                            adminuser ?
                                <div className='d-flex flex-column align-items-center'>
                                    <h2 className='text-dark text-center py-2'>Admin Already Logged In</h2><br />
                                    <input
                                        className='col-md-4 btn btn-danger my-3 align-items-center'
                                        type="button"
                                        value="Logout"
                                        onClick={() => dispatchAdmin({ type: 'ADMINLOGOUT' })} />
                                    <NavLink to="/dashboardadmin" className='col-md-4 btn btn-success my-3 align-items-center'>Admin Account</NavLink>
                                </div>
                                : <AdminLogin />
                        }

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home;