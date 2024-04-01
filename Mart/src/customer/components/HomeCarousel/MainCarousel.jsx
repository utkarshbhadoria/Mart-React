import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useNavigate } from 'react-router-dom';
import { CarouselImages } from './CarouselImages';





  function MainCarousel() {
    const items = CarouselImages.map(
    (item)=> <img className='cursor-pointer w-max h-max  relative' role='presentation'
     src={item.image}></img>)
    
    return(
        <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        controlsStrategy="alternate"
        
        autoWidth
    />
    )
}
export default MainCarousel

