import React from 'react';
import "./ResetPassword.css"

const ResetPassword = () => {
    return (
        <div className="resetpassword-screen">
            <form className="resetpassword-screen__form">
            <h3 className="resetpassword-screen__title">Reset Password</h3>
    
            <div className="form-group">
                <label htmlFor="password">New Password:</label>
                <input
                type="password"
                required
                id="password"
                placeholder="Enter new password"
                autoComplete="true"
                />
            </div>
            <div className="form-group">
                <label htmlFor="confirmpassword">Confirm New Password:</label>
                <input
                type="password"
                required
                id="confirmpassword"
                placeholder="Confirm new password"
                autoComplete="true"
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Reset Password
            </button>
            </form>
      </div>
    )
}

export default ResetPassword
