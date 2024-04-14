import React from "react";
import HomeCard from "./HomeCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { Button } from "@mui/material";

function HomeSectionCarousel() {
  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1024: { items: 4 },
  };

  const items = [1, 1, 1,1,1,1,1,1,1,1,1,1].map((item) => <HomeCard />);
  return (
    <div className="relative px-4 lg:px-8">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          controlsStrategy="alternate"
          responsive={responsive}
          infinite
        />
      </div>
    </div>
  );
}

export default HomeSectionCarousel;
