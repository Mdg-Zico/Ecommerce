import React from "react";



export default function ProductLogoWithViewAll(){

    return(
        
        <div>
        <div className="productMainDiv">
            <div className="productLogo">

            </div>
            <div className="productLogoText">
                <h3>This Month</h3>
            </div>
            
        </div>
        <div className="flexViewaAll">
        <div className="OfferText">
        <div>
                <h1>Best Selling Products</h1>
                </div>
                <div className="ButtonViewAll">
            <button type="submit" className="ButtonViewAllSize">View All</button>
        </div>
            </div>
            
        </div>
        </div>
       
       
    )
}