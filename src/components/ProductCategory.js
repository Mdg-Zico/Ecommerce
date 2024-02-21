import React from "react";



export default function ProductCategory(props){
    return(
 
        <div className="category-div-flex">
            <div className="category-box">
            <div className="product-category-div">
            <img className="product-category-img" src={props.onImg} alt=""/>

            <p>{props.text1}</p>
            </div>
           
           
            </div>
            
        </div>
    
          
    )
}