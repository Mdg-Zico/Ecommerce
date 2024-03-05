import React from "react";


export default function ExploreProduct(props){
    return(
        <div className="main-main"  >
   
        <div className="main">
           <div className="product-image">
   
           <img className="xProduct-img" src={props.img} alt=""/>
   
   
           </div>
           <h3>{props.description}</h3>
           <p>{props.price}</p>
           <p>{props.rating}</p>
           </div>
       </div>
    )
}