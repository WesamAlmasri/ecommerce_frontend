import React, { useState } from 'react';
import './styles.css';


const Slideshow = (props) => {
  const { images } = props;
  const [slideIndex, setSlideIndex] = useState(1);  
  

  return (
      <>
        <div className="slideshowContainer">
          <img className="slideshowImage fade" 
            src={images[slideIndex - 1]}
            alt="" 
          />

          <a class="slidershowPrevBtn" 
            onClick={()=>setSlideIndex(prev => {
              if(prev - 1 < 1) return images.length;
              return prev - 1;
            })}>&#10094;
          </a>
          <a class="slidershowNextBtn" 
            onClick={()=>setSlideIndex(prev => {
              if(prev + 1 > images.length) return 1;
              return prev + 1;
            })}>&#10095;
          </a>
        </div>
        <div className="slidershowDotsContainer">
          {
            images.map((_, index) => 
              <span 
                key={index}
                className={`slidershowDot ${slideIndex === index + 1 && "active"}`} 
                onClick={()=>setSlideIndex(index + 1)}>
              </span>)
          }
        </div> 
    </>    
  );
}

export default Slideshow;