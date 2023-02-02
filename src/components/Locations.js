import React from "react";
import Catalogue from "./Catalogue";
import HomeImage1 from "../images/HomeImage1.png";
import HomeImage2 from "../images/HomeImage2.png";
import HomeImage3 from "../images/HomeImage3.png";
import HomeImage4 from "../images/HomeImage4.png";
import Footer from "./Footer";

function Locations() {
  return (
    <div>
     <div className="catalogue-section mb-md">
      <div className="location-lists">
        <ul>
          <li>Restaurant</li>
          <li>Cottage</li>
          <li>Castle</li>
          <li>Fantast City</li>
          <li>Beach</li>
          <li>Carbins</li>
          <li>Off-grid</li>
          <li>Farm</li>
        </ul>
        <button className=" btn btn-white">Location</button>
      </div>
      <div className="catalogue">
          <Catalogue
            catalogueImage={HomeImage1}
            pTopLeft="Desert King"
            pTopRight="1MBT per night"
            pButtomLeft="2345km away"
            pButtomRight="available for 2weeks stay"
          />
          <Catalogue
            catalogueImage={HomeImage2}
            pTopLeft="Desert Queen"
            pTopRight="2MBT per night"
            pButtomLeft="3345km away"
            pButtomRight="available for 3weeks stay"
          />
          <Catalogue
            catalogueImage={HomeImage3}
            pTopLeft="Palace Queen"
            pTopRight="6MBT per night"
            pButtomLeft="5345km away"
            pButtomRight="available for 5weeks stay"
          />
          <Catalogue
            catalogueImage={HomeImage4}
            pTopLeft="Palace King"
            pTopRight="6MBT per night"
            pButtomLeft="3345km away"
            pButtomRight="available for 2weeks stay"
          />
          <Catalogue
            catalogueImage={HomeImage3}
            pTopLeft="Palace Queen"
            pTopRight="6MBT per night"
            pButtomLeft="5345km away"
            pButtomRight="available for 5weeks stay"
          />
          <Catalogue
            catalogueImage={HomeImage4}
            pTopLeft="Palace King"
            pTopRight="6MBT per night"
            pButtomLeft="3345km away"
            pButtomRight="available for 2weeks stay"
          />
          <Catalogue
            catalogueImage={HomeImage1}
            pTopLeft="Desert King"
            pTopRight="1MBT per night"
            pButtomLeft="2345km away"
            pButtomRight="available for 2weeks stay"
          />
          <Catalogue
            catalogueImage={HomeImage2}
            pTopLeft="Desert Queen"
            pTopRight="2MBT per night"
            pButtomLeft="3345km away"
            pButtomRight="available for 3weeks stay"
          />
           <Catalogue
            catalogueImage={HomeImage1}
            pTopLeft="Desert King"
            pTopRight="1MBT per night"
            pButtomLeft="2345km away"
            pButtomRight="available for 2weeks stay"
          />
          <Catalogue
            catalogueImage={HomeImage2}
            pTopLeft="Desert Queen"
            pTopRight="2MBT per night"
            pButtomLeft="3345km away"
            pButtomRight="available for 3weeks stay"
          />
          <Catalogue
            catalogueImage={HomeImage3}
            pTopLeft="Palace Queen"
            pTopRight="6MBT per night"
            pButtomLeft="5345km away"
            pButtomRight="available for 5weeks stay"
          />
          <Catalogue
            catalogueImage={HomeImage4}
            pTopLeft="Palace King"
            pTopRight="6MBT per night"
            pButtomLeft="3345km away"
            pButtomRight="available for 2weeks stay"
          />
           <Catalogue
            catalogueImage={HomeImage3}
            pTopLeft="Palace Queen"
            pTopRight="6MBT per night"
            pButtomLeft="5345km away"
            pButtomRight="available for 5weeks stay"
          />
          <Catalogue
            catalogueImage={HomeImage4}
            pTopLeft="Palace King"
            pTopRight="6MBT per night"
            pButtomLeft="3345km away"
            pButtomRight="available for 2weeks stay"
          />
          <Catalogue
            catalogueImage={HomeImage1}
            pTopLeft="Desert King"
            pTopRight="1MBT per night"
            pButtomLeft="2345km away"
            pButtomRight="available for 2weeks stay"
          />
          <Catalogue
            catalogueImage={HomeImage2}
            pTopLeft="Desert Queen"
            pTopRight="2MBT per night"
            pButtomLeft="3345km away"
            pButtomRight="available for 3weeks stay"
          />
        </div>
      </div>
      <div className="footer-information">
        <Footer />
      </div>
    </div>
  );
}

export default Locations;
