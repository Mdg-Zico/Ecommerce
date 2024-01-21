import React from "react";


export default function Founder(props){
    return(
       <div>
            <div className="founders-div">
                <img className="founders-img" src={props.img} alt="" />
            </div>
            <h2 className="founders-name">{props.name}</h2>
            <p className="founders-title">{props.title}</p>
           
                <img className="founders-social-handle" src={props.src1} alt="" />
                <img className="founders-social-handle" src={props.src2} alt="" />
                <img className="founders-social-handle" src={props.src3} alt="" />
                
            
        </div>
    )
}