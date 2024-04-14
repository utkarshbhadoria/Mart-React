
import React from "react";
import HomeSectionCarousel from "./HomeSectionCarousel";
import { Button } from "@mui/material";

function HomeCard() {

  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lgoverflow-hidden w-[15rem] mx-3">


      <div className="h-[13-rem] w-[10-rem]">
        <img
          className="object-cover object-top w-full h-full"
          src="https://th.bing.com/th/id/OIP.6UxGx9HUhHRBkeiEel_8twHaLg?w=186&h=290&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
        />
      </div>

      <div className="p-7">
        <h3 className="text-lg font-medium text-grey-900">No Filter</h3>
        <Button variant="outlined">Add to Cart</Button>
        <p>Description</p>
      </div>



    </div>
  );
}

export default HomeCard;
