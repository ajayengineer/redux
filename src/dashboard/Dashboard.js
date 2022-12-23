import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import Registration from './Registration';

const Dashboard = () => {
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
                    <Registration />
                </div>
                <div className='col-md-6'>
                    {
                        user ?
                            <input
                                type="button"
                                value="Logout"
                                onClick={() => dispatch({ type: 'LOGOUT' })} />
                            : <Login />
                    }
                </div>
            </div>
        </div>
    );
}

export default Dashboard;