import React from "react";
import "../css/login.css";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from 'react-router-dom';


const clientId = "527292517145-s2fpiloqpvm1h5avi383tq5u4l0mmjsa.apps.googleusercontent.com";

export default function Login() {
    const navigate = useNavigate();

    const  onSuccess = () => {
      // Redirect to another route
      navigate('/LoginSuccessful');
    };

    const onFailure = () => {
        navigate('/');
    };

    const GoToRegister =() =>{
        navigate('/Register');
    };
    
    return (
        <>
            <div className="wrapper">
                <div className="form-box login">
                    <h2>Login</h2>
                    <form action="#">
                        <div className="input-box">
                            <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                            <input type="email" required />
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                            <input type="password" required />
                            <label>password</label>
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" />Remember me</label>
                            <a href="#">Forgot password?</a>
                        </div>
                        <button type="submit" className="btn">Login</button>
                        <div id="signInButton">
                            <GoogleLogin
                                className="oauth"
                                clientId={clientId}
                                buttonText="Login"
                                onSuccess={onSuccess}
                                onFailure={onFailure}
                                cookiePolicy={'single_host_origin'}
                                isSignedIn={true}
                            />
                        </div>
                        <div className="logo-register">
                            <p>Don't have an account?<a className="register-link" onClick={GoToRegister}>Register</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
