import React from 'react';
import '../styles/login.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className='loginPage'>
            <center>
                <div className='loginBox'>
                    <center>
                        <h2>Login to Continue</h2>

                        <br />

                    </center>
                    <form>

                        <div className="container">
                            <label><b>Username</b></label>
                            <input className='form-text' type="text" placeholder="Enter Username" name="uname" />

                            <label><b>Password</b></label>
                            <input className='form-pass' type="password" placeholder="Enter Password" name="psw" />

                            <Link to='/login'>
                                <button type="submit">Login</button>
                            </Link>

                        </div>
                        <center>
                            <span className='lastLine'>Don't have an account?
                                <Link to='/signup'> SignUp</Link>
                            </span>
                        </center>
                        <br />
                    </form>


                </div>
            </center>
        </div>
    )
}

export default Login