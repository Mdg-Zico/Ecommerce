import React from "react";
import AboutStats from "../components/AboutStats";
import AboutObject from "../components/AboutStatsObject";
import Founder from "../components/Founders";
import FoundersObject from "../components/FoundersObject";
import Incentives from "../components/Incentives";
import IncentivesObject from "../components/IncentivesObject";

const about = AboutObject.map((abouts)=> {
 return <AboutStats
      {...abouts}
/>
})

  const founder = FoundersObject.map((iterate)=>{
   return <Founder
    {...iterate}
    />
  })
  const incent = IncentivesObject.map((incents) => (
    <Incentives key={incents.id} {...incents} />
  ));
export default function About(){
    return (
        <div>
    <div className="about-div">
        <div className="about-content">
            <h1 className="about-h1">Our Story</h1>
            <p className="about-p">Launced in 2015, Exclusive is South Asia’s premier online shopping
                    makterplace with an active presense in Bangladesh. Supported
                    by wide range of tailored marketing, data and service solutions,
                    Exclusive has 10,500 sallers and 300 brands and serves 3
                    millioons customers across the region.
                    
                </p>

                <p className="about-p">
                    Exclusive has more than 1 Million products to offer, growing at a
                    very fast. Exclusive offers a diverse assotment in categories
                    ranging from consumer.
                </p>
        </div>


        <div>

            <img className="about-img" src="https://img.freepik.com/free-photo/smiley-woman-posing-with-shopping-bags-sale-tags_23-2148684467.jpg?w=740&t=st=1705566311~exp=1705566911~hmac=f6d0a49f1cdcfd44170a6af7b7778f36f2b4a83f028fb5df8f8e4c8ef23c1314" alt=""/>

        </div>
         
        
       
        

    </div>
        <div className="boss-div">
        {about}
        </div>

        <div className="main-founders-div">
        {founder}
        </div>

        <div className="incent-about">  
        {incent}
        </div>
        

</div>
            


    )
}
