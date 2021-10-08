import React from 'react';
import useForm from './useForm';
import "./RegScreen.css";
import validateInfo from './validateInfo';


const RegScreen = () => {

    const {handleChange, values, handleSubmit, errors}= useForm(validateInfo);



    return (
    <div className="container">
        <div className="title">Registration</div>
        <div className="content">
          <form >
                <div className="user-details">
                    <div className="input-box">
                        <span className="details">First Name</span>
                        <input type="text" placeholder="Enter your firstname" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Last Name</span>
                        <input type="text" placeholder="Enter your lastname" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Email</span>
                        <input type="text" placeholder="Enter your email" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Phone Number</span>
                        <input type="text" placeholder="Enter your number" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Password</span>
                        <input type="text" placeholder="Enter your password" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Confirm Password</span>
                        <input type="text" placeholder="Confirm your password" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Height (cm)</span>
                        <input type="text" placeholder="Height in centimeters" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Weight (kg)</span>
                        <input type="text" placeholder="Weight in killogram" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Address</span>
                        <input type="text" placeholder="Enter valid address" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Occupation</span>
                        <input type="text" placeholder="Optional" required/>   
                    </div>

                    <div className="gender-details">
                        <input type="radio" name="gender" id="dot-1"/>
                        <input type="radio" name="gender" id="dot-2"/>
                        <input type="radio" name="gender" id="dot-3"/>
                        <span className="gender-title">Gender</span>
                        <div className="category">
                            <label for="dot-1">
                                <span className="dot one"></span>
                                <span className="gender">Male</span>
                            </label>
                            <label for="dot-2">
                                <span className="dot two"></span>
                                <span className="gender">Female</span>
                            </label>
                            <label for="dot-3">
                                <span className="dot three"></span>
                                <span className="gender">Prefer not to say</span>
                            </label>
                        </div>
                    </div>


                </div>

                
               
                <div className="button">
                    <input type="submit" value="Register"/>
                </div>
          </form>
        </div>
    </div>
    
    );
};

export default RegScreen
