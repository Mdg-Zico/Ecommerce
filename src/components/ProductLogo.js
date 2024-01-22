import React from "react";



export default function ProductLogo(props){

    return(
        <div>
        <div className="productMainDiv">
            <div className="productLogo">

            </div>
            <div className="productLogoText">
                <h3>{props.content}</h3>
            </div>
            
        </div>
        <div className="OfferText">
                <h1 className="logo-h1" >{props.subtopic}</h1>
                <p>{props.count}</p>
               
            </div>
        </div>
    )
}