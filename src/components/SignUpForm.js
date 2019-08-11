import React from 'react';
import './SignUpForm.css';
import wsLogo from '../../src/werker-icon.png';
import logo from '../../src/anywokshop-logo.png';

const SignUp = () => {
    return(
        <div className="container register">
                <div className="row">
                    <div className="col-md-3 register-left">
                        <img src={wsLogo} alt="Logo" />
                        <h3>Welcome</h3>
                        <p>Select the relevant form to either find werk or werkers</p>
                        <img src={logo} alt="Logo"  id="logo-img"/>
                    </div>
                    <div className="col-md-9 register-right">
                        <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Werker</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Hirer</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">Register as a Werker</h3>
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="First Name *" value="" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Last Name *" value="" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Password *" value="" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control"  placeholder="Confirm Password *" value="" />
                                        </div>
                                        <div className="form-group">
                                            <div className="maxl">
                                                <label className="radio inline"> 
                                                    <input type="radio" name="gender" value="male" checked />
                                                    <span> Male </span> 
                                                </label>
                                                <label className="radio inline"> 
                                                    <input type="radio" name="gender" value="female" />
                                                    <span>Female </span> 
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Your Email *" value="" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" minlength="10" maxlength="10" name="txtEmpPhone" className="form-control" placeholder="Your Phone *" value="" />
                                        </div>
                                        <div className="form-group">
                                            <h4>Upload an image of you</h4>
                                            <input type="file" />
                                        </div>
                                        <input type="submit" className="btnRegister"  value="Register"/>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h3  className="register-heading">Register to find werkers</h3>
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="First Name *" value="" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Last Name *" value="" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email *" value="" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" maxlength="10" minlength="10" className="form-control" placeholder="Phone *" value="" />
                                        </div>


                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Password *" value="" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Confirm Password *" value="" />
                                        </div>
                                        <div className="form-group">
                                            <select className="form-control">
                                                <option className="hidden"  selected disabled>Please select your Sequrity Question</option>
                                                <option>What is your Birthdate?</option>
                                                <option>What is Your old Phone Number</option>
                                                <option>What is your Pet Name?</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="`Answer *" value="" />
                                        </div>
                                        <input type="submit" className="btnRegister"  value="Register"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    );
};

export default SignUp;