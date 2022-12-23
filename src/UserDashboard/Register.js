import React from 'react'
import { useSelector } from 'react-redux';
import UserRegistrationForm from './UserRegistrationForm';

const Register = () => {
    const users = useSelector(state => state.allUsers.users)

    return (
        <div className='container bg-warning rounded-4 mb-5'>
            <div className='row d-flex flex-column align-items-center'>
                <h2 className='pt-3 text-center'>User Registration Form</h2>
                <p className='text-center'>Please Create you account from here</p>
                <div className='col-md-6'>
                    {
                        users.map(user =>
                            <ul className='card py-3' key={user.id}>
                                <li> <b>Full Name:</b> <span className='text-danger fw-bold'>{user.name}</span> </li>
                                <li> <b>User Name:</b> <span className='text-danger fw-bold'>{user.username}</span> </li>
                                <li> <b>Password:</b> <span className='text-danger fw-bold'>{user.password}</span> </li>
                            </ul>)
                    }
                    <UserRegistrationForm />
                </div>
            </div >
        </div >
    );
}

export default Register;