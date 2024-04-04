import React from "react";
import HomeSectionCarousel from "./HomeSectionCarousel";

function HomeCard() {

  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lgoverflow-hidden w-[15rem] mx-3">


      <div className="h-[13-rem] w-[10-rem]">
        <img
          className="object-cover object-top w-full h-full"
          src="https://www.bing.com/images/search?view=detailV2&ccid=iVBjXVZ5&id=A3EB1CE70B631C369E90C2A214BF04B84389D4E9&thid=OIP.iVBjXVZ5UfGljvuXz6lxVQHaQu&mediaurl=https%3a%2f%2fi.pinimg.com%2f736x%2f4a%2fb4%2fa3%2f4ab4a3dba6e385f9e5d6dfaaaec532c3.jpg&exph=1249&expw=553&q=Clothing+Styles+for+Men&simid=607998663498354549&FORM=IRPRST&ck=00B9A4E46269B83A59D9FDBE0BF3D242&selectedIndex=12&itb=0"
          alt=""
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-grey-900">No Filter</h3>
        <p>Men solid Round neck Tshirt</p>
      </div>



    </div>
  );
}

export default HomeCard;
