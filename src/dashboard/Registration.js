import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const Registration = () => {
    const [name, setName] = useState(" ");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const dispatch = useDispatch();

    const register = () => {
        dispatch({
            type: "REGISTER",
            payload: {
                id: (new Date).getTime(),
                name, username, password
            }
        });
    }

    return (
        <div className='row'>
            <h1 className='text-danger py-5'>Registration Forms</h1>
            <form>
                <label>
                    First name
                    <input
                        type="text"
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
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
                <label>
                    Confirm Password
                    <input
                        type="password"
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </label>

                <input type="button" value="Register" onClick={register} />
            </form>


        </div>
    )
}

export default Registration