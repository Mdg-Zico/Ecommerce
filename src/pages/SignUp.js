import React from "react";
import Navbar from "../components/Navbar";
import SectOne from "../components/SectOne";

export default function SignUp(){
 return   <div>
        <Navbar/>
        <SectOne/>
        <div>
            <img src="" alt="" />
        </div>
        <div>
        <h1></h1>
        <p></p>
        
        <form>
            <input type="text number email" placeholder="Email or Phone number"  />
            <input type="password" placeholder="Password"/>
            <div>
                <button type="submit">Login</button>
                <a href="#">Forgot Password?</a>
            </div>

        </form>



        </div>
        
    </div>
}