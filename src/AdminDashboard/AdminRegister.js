import React from 'react'
import { useSelector } from 'react-redux';
import AdminRegistrationForm from './AdminRegistrationForm';

const AdminRegister = () => {
    const adminusers = useSelector(state => state.allAdminUsers.adminusers)

    return (
        <div className='container bg-warning rounded-4 mb-5'>
            <div className='row d-flex flex-column align-items-center'>
                <h2 className='pt-3 text-center'>Admin Registration Form</h2>
                <p className='text-center'>Please create you account as Admin from here</p>
                <div className='col-md-6'>
                    {
                        adminusers.map(user =>
                            <ul className='card py-3' key={user.id}>
                                <li> <b>Admin Fullname:</b> <span className='text-danger fw-bold'>{user.name}</span> </li>
                                <li> <b>Admin Username:</b> <span className='text-danger fw-bold'>{user.username}</span> </li>
                                <li> <b>Admin Password:</b> <span className='text-danger fw-bold'>{user.password}</span> </li>
                            </ul>)
                    }
                    <AdminRegistrationForm />
                </div>
            </div >
        </div >
    );
}

export default AdminRegister;