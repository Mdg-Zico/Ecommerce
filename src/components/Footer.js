import React from "react";


export default function Footer(props){
    return(
      
       
           

            <div className="subfooter" >
               
           
                <h2>{props.mainhead}</h2>
                <p className="incentiveH">{props.subhead}</p>
                <p className="incentiveP">{props.subpgraph}</p>
                <p>{props.address}</p>
                <p>{props.mail}</p>
                <p>{props.phone}</p>
                <p>{props.myacct}</p>
                <p>{props.login}</p>
                <p>{props.Cart}</p>
                <p>{props.wishlist}</p>
                <p>{props.shop}</p>
                <p>{props.privacy}</p>
                <p>{props.terms}</p>
                <p>{props.faq}</p>
                <p>{props.contact}</p>
                <p>{props.save}</p>



                
           
               
         
        </div>
      
       
       
    
 
    )
}