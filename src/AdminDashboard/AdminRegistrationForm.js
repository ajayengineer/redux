import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const AdminRegistration = () => {
    const [name, setName] = useState(" ");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const dispatchaDdmin = useDispatch();

    const register = () => {
        dispatchaDdmin({
            type: "ADMINREGISTER",
            payload: {
                id: (new Date).getTime(),
                name, username, password, confirmPassword
            }
        });
    }

    return (
        <div className='row'>
            <form>
                <div class="mb-3">
                    <label class="form-label">Admin Full Name</label>
                    <input
                        class="form-control"
                        type="text"
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div class="mb-3">
                    <label class="form-label">Admin User Name</label>
                    <input
                        class="form-control"
                        type="text"
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div class="mb-3">
                    <label class="form-label">Admin Password</label>
                    <input
                        class="form-control"
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div class="mb-3">
                    <label class="form-label">Admin Confirm Password</label>
                    <input
                        class="form-control"
                        type="password"
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <input type="button" className="btn btn-primary col-md-4 mb-4" value="Register" onClick={register} />
            </form >
        </div >
    )
}

export default AdminRegistration;