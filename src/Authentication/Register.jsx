import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {ReactComponent as Avatar} from './avatar.svg';
import {ReactComponent as Reading} from './reading.svg';


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmpass, setConfirmPass] = useState('');
    const [name, setName] = useState('');
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    } 

    return (
        <div className="App-auth">
            <div className="div-register">
                <div>
                    <Reading className="reading"/>
                    <h1 className="title">THERAPY HUB</h1>
                </div>
                <div className="auth-form-container-register">
                    <form className="register-form" onSubmit={handleSubmit}>
                        <div className="avatar"><Avatar /></div>

                        <h1 className="welcome-text">Join our team!</h1>
                        
                        <label htmlFor="firstname"><b>Name:</b></label>
                        <input className="input-register" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" id="firstname" name="name" />
                        
                        <label htmlFor="email"><b>Email:</b></label>
                        <input className="input-register" value = {email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />

                        <label htmlFor="password"><b>Password:</b></label>
                        <input className="input-register" value = {pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                        
                        <label htmlFor="password"><b>Confirm Password:</b></label>
                        <input className="input-register" value = {confirmpass} onChange={(e) => setConfirmPass(e.target.value)}  type="password" placeholder="********" id="confirmpass" name="confirmpass" />
                        
                        <button className="register-btn" type="submit"><b>Register</b></button>
                    </form>

                    <button className="link-btn-register" onClick={() => history("/")}>Already have an account? Login here.</button>
                </div>
            </div>
        </div>
    )
}