import React from 'react';
import useForm from './useForm';
import "./RegScreen.css";
import validateInfo from './validateInfo';


const RegScreen = () => {

    const {handleChange, values, handleSubmit, errors}= useForm(validateInfo);

    function onlyNumberKey(evt) {
          
        // Only ASCII character in that range allowed
        var ASCIICode = (evt.which) ? evt.which : evt.keyCode
        if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
            return false;
        return true;
    }



    return (
    <div className="container">
        <div className="title">Registration</div>
        <div className="content">
          <form >
                <div className="user-details">
                    <div className="input-box">
                        <span className="details">First Name :</span>
                        <input type="text" placeholder="Enter your firstname" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Last Name :</span>
                        <input type="text" placeholder="Enter your lastname" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Email :</span>
                        <input type="text" placeholder="Enter your email" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Phone Number :</span>
                        <input type="text" placeholder="Enter your number" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Password :</span>
                        <input 
                            type="password"
                            id='password'
                            placeholder="Enter your password"
                            required

                        />
                    </div>
                    <div className="input-box">
                        <span className="details">Confirm Password :</span>
                        <input
                            type="password"
                            id='password2'
                            placeholder="Confirm your password"
                            required
                            />
                    </div>
                    <div className="input-box">
                        <span className="details">Height (cm) :</span>
                        <input type="text" placeholder="Height in centimeters" required
                        onkeypress="return onlyNumberKey(event)"
                        />
                    </div>
                    <div className="input-box">
                        <span className="details">Weight (kg) :</span>
                        <input type="text" placeholder="Weight in killogram" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Address :</span>
                        <input type="text" placeholder="Enter valid address" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Occupation :</span>
                        <input type="text" placeholder="Optional" required/>   
                    </div>

                </div>
                <div class="gender-details">
                    <input type="radio" name="gender" id="dot-1"/>
                    <input type="radio" name="gender" id="dot-2"/>
                    <input type="radio" name="gender" id="dot-3"/>
                    <span class="gender-title">Gender :</span>
                    <div class="category">
                        <label for="dot-1">
                            <span class="dot one"></span>
                            <span class="gender">Male</span>
                        </label>
                        <label for="dot-2">
                            <span class="dot two"></span>
                            <span class="gender">Female</span>
                        </label>
                        
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
