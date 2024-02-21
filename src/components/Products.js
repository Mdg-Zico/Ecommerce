import React from "react";
import Slideshow from "./Slideshow";



export default function Product(){
    
    
    return(
        <div className="product-div-flex">
       
        
        <div className="product-div">
            <ul className="products">
                <li>Woman's Fashion</li>
                <li>Men's Fashion</li>
                <li>Electronics</li>
                <li>Home & Lifestyle</li>
                <li>Medicine</li>
                <li>Sports & Outdoor</li>
                <li>Baby's & Toys</li>
                <li>Groceries & Pets</li>
                <li>Health & Beauty</li>

            </ul>
           
        </div>
    
            <div>
            <hr className="ProductLine" />

            
        
            </div>

          
          <Slideshow/>
          
        
  </div>

    )
}