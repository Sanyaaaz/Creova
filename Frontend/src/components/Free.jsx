import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";

import Cards from "./Cards";
function FreeCreator() {
  const [creator, setCreator] = useState([]);
  useEffect(() => {
    const getcreator = async () => {
      try {
        const res = await axios.get("http://localhost:4001/creator");

        const data = res.data.filter((data) => data.category === "Free");
        console.log(data);
        setCreator(data);
      } catch (error) {
        console.log(error);
      }
    };
    getcreator();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Explore Creators</h1>
          <p>
          Discover a vibrant community of talented designers, video editors, graphic artists, and content creators. Creova connects you with innovative minds who craft extraordinary visuals, animations, and designs that inspire. Browse through a diverse gallery of creative works, showcasing skills across various domains, and find the perfect creator to bring your vision to life.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {creator.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default FreeCreator;


// import React, { useEffect, useState } from "react";
// import list from "../../public/list.json"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// import axios from "axios";

// import Cards from "./Cards";

// function Explore() {
//     const filterdate= list.filter((data )=>data.subscription ==="Free ");
//   return (
//     <>
//      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
//         <div>
//           <h1 className="font-semibold text-xl pb-2">Explore Creators</h1>
//           <p>
//           Discover a diverse community of talented creators showcasing their unique designs, videos, and graphics. Explore, connect, and collaborate with the best in the industry!
//           </p>
//         </div>
//       </div> 
//      </>
//   )
// }

// export default Free
