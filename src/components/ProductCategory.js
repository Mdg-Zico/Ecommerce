import React from "react";



export default function ProductCategory(props){
    return(
 
        <div className="category-div-flex">
            <div className="category-box">
            <div>
            <img src={props.onImg}/>
            </div>
            <div>
            <p>{props.text1}</p>

            </div>
           
            </div>
            
        </div>
    
          
    )
}