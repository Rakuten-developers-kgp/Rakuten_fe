import React from 'react';
import '../styles/login.css';
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <div className='loginPage'>
            <center>
                <div className='loginBox'>
                    <center>
                        <h2>Create an Account</h2>

                        <br />

                    </center>
                    <form>

                        <div className="container">
                            <label><b>Username</b></label>
                            <input className='form-text' type="text" placeholder="Enter Username" name="uname" />

                            <label><b>Password</b></label>
                            <input className='form-pass' type="password" placeholder="Enter Password" name="psw" />

                            <button type="submit">Create Account</button>

                        </div>
                        <center>
                            <span className='lastLine'>Already have an account?
                                <Link to='/'> Login</Link>
                            </span>
                        </center>
                        <br />
                    </form>


                </div>
            </center>
        </div>
    )
}

export default Signup