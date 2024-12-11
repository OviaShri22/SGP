import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/forms.css";
import loginimage from "../assets/form_image.png" ;


const Signup = () => {
    

    return (
        <div className="storage-section">
            <div className="leftsection">
                <img
                    src={loginimage}
                    alt="Food Donation Image"
                    style={{ maxWidth: "94%" }}
                />
            </div>
            <div className="rightsection">
                <h1 className="heading" style={{ fontSize: "45px" }}>
                    Sign Up
                </h1>
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
                            type="password"
                            placeholder="Password"
                            className="formscontrol"
                            id="inputPassword"
                        />
                    </div>
                    <div className="formsgroup">
                        <label htmlFor="inputName">Name</label>
                        <input
                            
                            label="Name"
                            placeholder="Name"
                            className="formscontrol"
                            id="inputName"
                        />
                    </div>
                    <div className="formsgroup">
                        <label htmlFor="inputEmail">Email</label>
                        <input
                           
                            label="Email"
                            type="email"
                            placeholder="Email"
                            className="formscontrol"
                            id="inputEmail"
                        />
                    </div>
                    <div className="formsgroup">
                        <label htmlFor="inputPhoneNumber">Mobile No</label>
                        <input
                           
                            label="Mobile No"
                            placeholder="Mobile No"
                            className="formscontrol"
                            id="inputPhoneNumber"
                        />
                    </div>
                    <div className="formsgroup">
                        <label htmlFor="inputAddress">Address</label>
                        <input
                            
                            placeholder="Address"
                            className="formscontrol"
                            id="inputAddress"
                        />
                    </div>
                    <div className="formsrow">
                        <div className="formsgroup">
                            <label htmlFor="inputCity">City</label>
                            <input
                                
                                label="City"
                                placeholder="City"
                                className="formscontrol"
                                id="inputCity"
                            />
                        </div>
                        <div className="formsgroup">
                            <label htmlFor="inputState">State</label>
                            <input
                                
                                label="State"
                                placeholder="State"
                                className="formscontrol"
                                id="inputState"
                            />
                        </div>
                        <div className="formsgroup">
                            <label htmlFor="inputZip">Zip Code</label>
                            <input
                                
                                label="Postal Code"
                                placeholder="Zip Code"
                                className="formscontrol"
                                id="inputZip"
                            />
                        </div>
                    </div>
                    <div className="formsgroup">
                        <label htmlFor="inputCountry">Country</label>
                        <input
                          
                            label="Country"
                            placeholder="Country"
                            className="formscontrol"
                            id="inputCountry"
                        />
                    </div>
                    <div className="bottom-buttons">
                        <button className="button-main" onClick={Signup}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
