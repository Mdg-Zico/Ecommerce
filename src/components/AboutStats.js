import React from "react";

export default function AboutStats(props){
    return(
   
<div className="incentivesDivAbout">
<div className="majorAboutDiv" style={{backgroundColor: props.bgcolor, color: props.colors}}>
<div className="incentives" >
    <div className="subIncentives">
        <div className="doubleSubIncentives">

        </div>
    </div>
    <div className="incentiveText">
    <h4 className="incentiveH">{props.stats}</h4>
    <p className="incentiveP" >{props.statsYext}</p>
</div>
</div>


</div>
</div>
    )
}