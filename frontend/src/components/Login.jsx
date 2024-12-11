import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/forms.css";
import loginimage from "../assets/form_image.png" ;

const Login = () => {

    return (
        <div className="storage-section">
            <div className="leftsection">
                <img
                    src={loginimage}
                    alt="Food Donation Image"
                />
            </div>
            <div className="rightsection">
                <h1 className="h1-line-height" style={{ fontSize: "45px" }}>
                    Welcome Back. Log In Below
                </h1>
                <br />
                <div className="input-form">
                    <div className="formsgroup">
                        <label htmlFor="inputUserName">Username</label>
                        <input
                            
                            label="inputUserName"
                            placeholder="Username"
                            className="formscontrol"
                            id="inputUserName"
                        />
                    </div>
                    <div className="formsgroup">
                        <label htmlFor="inputPassword">Password</label>
                        <input
                           
                            label="Password"
                           
                            placeholder="Password"
                            className="formscontrol"
                            id="inputPassword"
                        />
                        <br />
                        <br />
                        <input
                            type="checkbox"
                            id="showPassword"
                            
                           
                        />
                        <label htmlFor="showPassword">Show Password</label>
                    </div>
                    <div className="bottom-buttons">
                        <button className="button-main">
                            Log In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
