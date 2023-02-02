import React from "react";
import HomeImage1 from "../images/HomeImage1.png";
import HomeImage2 from "../images/HomeImage2.png";
import HomeImage3 from "../images/HomeImage3.png";
import HomeImage4 from "../images/HomeImage4.png";

const HomeImages = () =>{
    return (
        <div>
             <div className="home-images">
          <img id="home--image-tr" src={HomeImage1} alt="home-image1" />
          <img id="home--image-tl" src={HomeImage2} alt="home-image2" />
          <img id="home--image-br" src={HomeImage3} alt="home-image3" />
          <img id="home--image-bl" src={HomeImage4} alt="home-image4" />
        </div>
        </div>
    )
}

export default HomeImages;