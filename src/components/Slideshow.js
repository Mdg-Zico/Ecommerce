import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import ImageSliderObject from './ImageSliderObject';


const settings = {
dots: true,
autoplay: true,
arrows: false,
duration: 1500
        
};


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '400px',
  

}



const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...settings}>
         {ImageSliderObject.map((slideImage, index)=> (
            <div key={index}>
            
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})`, borderRadius: '0 !important', }}>
                
              </div>
              
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default Slideshow;