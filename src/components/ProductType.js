import React from "react";


export default function ProductType(props){
    console.log(props)

return(
    <div className="main-main"  >
   
     <div className="main">
        <div className="product-image">

        <img src={props.item.img} alt=""/>


        </div>
        <h3>{props.item.description}</h3>
        <p>{props.item.price}</p>
        <p>{props.item.rating}</p>
        </div>
    </div>
)

}