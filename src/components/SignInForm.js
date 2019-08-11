import React from 'react';
import { Link } from 'react-router-dom';
import './SignInForm.css';

const SignIn = () => {
    return(
    <div className="container">
      <form>
      <h2>Sign In</h2>
        <div className="form-group">
          <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
        </div>
        <div className="form-group form-check">
          <input className="form-check-input" type="checkbox" name="remember" /> Remember me
        </div>
        <button type="submit" className="btn btn-primary">Sign In</button>
        <p>New user? <Link to="/signup">Sign Up</Link></p>
      </form>
    </div>
    );
};

export default SignIn;