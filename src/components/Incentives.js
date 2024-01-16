import React from "react";


export default function Incentives(props){
    return(
    
        <div className="incentivesDiv">

            <div className="incentives" >
                <div className="subIncentives">
                    <div className="doubleSubIncentives">

                    </div>
                </div>
                <div className="incentiveText">
                <h4 className="incentiveH">{props.head}</h4>
                <p className="incentiveP">{props.sub}</p>
            </div>
            </div>
            

        </div>

       
    
 
    )
}