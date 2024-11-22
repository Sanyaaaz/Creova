import React, { useEffect, useState } from "react";
import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";

import Cards from "./Cards";

function Explore() {
    const filterdate= list.filter((data )=>data.subscription ==="Free ");
  return (
    <>
     <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Explore Creators</h1>
          <p>
          Discover a diverse community of talented creators showcasing their unique designs, videos, and graphics. Explore, connect, and collaborate with the best in the industry!
          </p>
        </div>
      </div> 
     </>
  )
}

export default Free
