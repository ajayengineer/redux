import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
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
            <h1 className='text-danger py-5'>Login Forms</h1>
            <form>
                <label>
                    Username
                    <input
                        type="text"
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <input type="button" value="Login" onClick={login} />
            </form>


        </div>
    )
}

export default Login