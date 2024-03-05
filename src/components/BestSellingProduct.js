import React from "react";

export default function BestSellingProduct(props){
    return(
        <div className="main-main"  >
   
     <div className="main">
        <div className="product-image">

        <img className="product-img" src={props.img}/>


        </div>
        <h3>{props.description}</h3>
        <p>{props.price}</p>
        <p>{props.rating}</p>
        </div>
    </div>
    )
}