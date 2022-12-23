import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import UserLoginForm from './UserLoginForm';
import UserRegistrationForm from './UserRegistrationForm';

const OldDashboard = () => {
    const users = useSelector(state => state.allUsers.users)
    const user = useSelector(state => state.allUsers.user)
    const dispatch = useDispatch();

    return (
        <div className='container bg-warning'>
            <div className='row'>
                <h1>User Dashboard</h1>
                <div className='col-md-6'>
                    {
                        users.map(user => <div key={user.id}> {user.name} - {user.username} </div>)
                    }
                    <UserRegistrationForm />
                </div>
                <div className='col-md-6'>
                    {
                        user ?
                            <input
                                type="button"
                                value="Logout"
                                onClick={() => dispatch({ type: 'LOGOUT' })} />
                            : <UserLoginForm />
                    }
                </div>
            </div>
        </div>
    );
}

export default OldDashboard;