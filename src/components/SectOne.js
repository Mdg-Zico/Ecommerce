import React from "react";
import { Link } from "react-router-dom";


export default function SectOne(){
    return (
        <div>
        <div className="sect-one">

        <div className="sect">
        <h2>Exclusive</h2>
        </div>

        <div className="sect">
        <ul className="contents">
          <Link to="/" className="link">Home</Link>
          <Link to="/contact" className="link">Contact</Link>
          <Link to="/about" className="link">About</Link>
          <Link to="/signup" className="link">Sign Up</Link>
        </ul>
            
        </div>

        <div className="sect">
            <input type="text" placeholder="What are you looking for?"/>
        </div>

        </div>
           <div>
            <hr/>
           </div>
           

        </div>
    )
}