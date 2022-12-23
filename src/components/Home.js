import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserLogin from '../UserDashboard/UserLoginForm';

const Home = () => {
    const user = useSelector(state => state.allUsers.user)
    const dispatch = useDispatch();

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
                                </div>
                                : <UserLogin />
                        }

                    </div>
                    <div className='col-md-5 card bg-danger'>
                        <h2 className='text-dark text-center'>Admin Login/Register</h2>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home;