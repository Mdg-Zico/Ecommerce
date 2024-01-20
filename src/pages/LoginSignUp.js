import React from "react";

import Input from "../components/Input";
import Button from "../components/Button";





export default function LoginSignUp(){
    
    
 return   <div className="signup">
       <div ><img className="signup-img" src="https://img.freepik.com/free-photo/adha-shopping-trolley-phones-perspective-side-white-background_187299-39332.jpg?size=626&ext=jpg&ga=GA1.2.148082434.1700502659&semt=ais" alt=""/></div>
       
       <div className="signup-form-div" >
            <h1>Log in to Exclusive</h1>
            <p>Enter your details below</p>

            <form className="signup-form">
              <Input
                class= "signup-input"
                type= "text"
                placeholder= "Email or Phone number"
                pattern= "([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|[0-9()+\- ]+)"
              />
              <Input
                class= "signup-input"
                type= "password"
                placeholder= "Password"
              />



              <div className="login-div">
              <div>
                <Button
                   class="login-button"
                    submit= "submit"
                    innerText= "Log in"
                />
                
                </div>
                
              

                  <div>
                    <p>Forgot Password?</p>
                 
                </div>

                </div>
       </form>
      
       </div>
       
           
       
    </div>
}