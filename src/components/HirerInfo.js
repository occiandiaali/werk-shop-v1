import React from 'react';
import logo from '../../src/anywokshop-logo.png';

import './HirerInfo.css';

const HirerInfo = () => {
    return(
        <div class="container">
        <h1>Hirer Information</h1>
        <h3>Please, read carefully</h3>

    <img src={logo} alt="logo" id="imagery"/>
  <div class="row">
    <div class="col-sm-4">
      <h3>Do you qualify?</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div class="col-sm-4">
      <h3>Security policy</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div class="col-sm-4">
      <h3>FAQs</h3>        
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
  </div>
</div>
    );
};

export default HirerInfo;