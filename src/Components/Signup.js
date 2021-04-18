import React from 'react';
import './Signup.css';
import img3 from './Images/Hos1.jpg';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

function Signup() {
  
  return (
    <div class="bod1" class="bgimg1" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(${img3})`}} >
         <div class="login-wrap" >
            <div class="login-html" >
                <input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">Sign In</label>
                <input id="tab-2" type="radio" name="tab" class="sign-up"/><label for="tab-2" class="tab">Sign Up</label>
                <div class="login-form">
                <form class="sign-in-htm" action="#" method="GET">
                    <div class="group">
                    <label for="user" class="label">Username</label>
                    <input id="username" name="username" type="text" class="input"/>
                    </div>
                    <div class="group">
                    <label for="pass" class="label">Password</label>
                    <input id="password" name="password" type="password" class="input" data-type="password"/>
                    </div>

                    <div class="group">
                    <input id="check" type="checkbox" class="check" checked/>
                    <label for="check"><span class="icon"></span> Keep me Signed in</label>
                    </div>
                    <div class="group">
                    <Link to="/patientdashboard"><input type="submit" class="button" value="Sign In"/></Link>
                    </div>
                    <div class="hr"></div>
                    <div class="foot-lnk">
                    <label for="tab-2" class="forget">Forget Password!</label>
                    </div>
                </form>
                <form class="sign-up-htm" action="./api/user/signup.php" method="POST">
                    <div class="group">
                    <label for="user" class="label">Username</label>
                    <input id="username" name="username" type="text" class="input"/>
                    </div>
                    
                    <div class="group">
                    <label for="pass" class="label">Email</label>
                    <input id="password" name="password" type="password" class="input" data-type="password"/>
                    </div>
                    <div class="group">
                    <label for="pass" class="label">Password</label>
                    <input id="password" name="password" type="password" class="input" data-type="password"/>
                    </div>

                    <div class="group">
                    <label for="pass" class="label"> Confirm Password</label>
                    <input id="password" name="password" type="password" class="input" data-type="password"/>
                    </div>

                    <div class="group">
                    <label for="pass" class="label">Phone No</label>
                    <input id="password" name="password" type="password" class="input" data-type="password"/>
                    </div>
                    
                    <div class="group">
                    <label for="pass" class="label">Address</label>
                    <input id="pass" name="cpassword" type="password" class="input" data-type="password"/>
                    </div>
                    <div class="group">
                    <input type="submit" class="button" value="Sign Up"/>
                    </div>
                    <div class="hr"></div>
                    <div class="foot-lnk">
                    <label for="tab-1" class="forget">Already Member?</label>
                    </div>
                </form>
                </div>
            </div>
            </div>
    </div>
  );
}

export default Signup;