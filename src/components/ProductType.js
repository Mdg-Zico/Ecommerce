import React from "react";


export default function ProductType(props){
    console.log(props)

return(
    <div className="main-main"  >
   
     <div className="main">
        <div className="product-image">

        <img className="product-type-image" src={props.img} alt=""/>


        </div>
        <h3>{props.description}</h3>
        <p>{props.price}</p>
        <p>{props.rating}</p>
        </div>
    </div>
)

}