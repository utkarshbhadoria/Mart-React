import React from 'react'

function HomeSectionCarousel() {
    const responsive = {
        0: { items: 1 },
        720: { items: 2 },
        1024: { items: 4 },
      };
    
      const items = [1, 1, 1, 1].map((item) => <HomeSectionCarousel />);
  return (
    <div>
        <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        controlsStrategy="alternate"
        
        infinite
        autoWidth
    />

    </div>
  )
}

export default HomeSectionCarousel