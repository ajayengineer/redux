import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const UserLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const users = useSelector(state => state.allUsers.users)

    const login = () => {
        const payload = users.find(user => user.username === username && user.password === password)

        if (payload) {
            dispatch({
                type: "LOGIN",
                payload
            })
            alert('Successfully Logged In!!');
        } else {
            alert('Wrong Credential!!');
        }
    }
    return (
        <div className='row py-5'>
            <h2 className='text-dark text-center py-2'>User Login/Register</h2>
            <form>
                <div class="mb-3">
                    <label class="form-label">User Name</label>
                    <input
                        class="form-control"
                        type="text"
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                    <div id="emailHelp" class="form-text text-dark">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input
                        class="form-control"
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" class="btn btn-primary col-md-4" value="Login" onClick={login}>Submit</button>
            </form>
            <div className='container mt-5'>
                <p>Don't have an Account?</p>
                <NavLink to="/register" className="btn btn-success col-md-4 mb-3">Register</NavLink>
            </div>
        </div>
    )
}

export default UserLogin;