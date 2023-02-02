import React from "react";
import TextAd from "./TextAd";
import Catalogue from "./Catalogue";
import Footer from "./Footer";
import NFTImages from "./NFTImages";
import HomeImage1 from "../images/HomeImage1.png";
import HomeImage2 from "../images/HomeImage2.png";
import HomeImage3 from "../images/HomeImage3.png";
import HomeImage4 from "../images/HomeImage4.png";


const Home= () => {
 
  return (

    <div>
      <div className="home">
        <div className="description">
          <h1>
            Rent a <span className="h1--color"> Place </span> away from{" "}
            <span className="h1--color">Home</span> in the{" "}
            <span className="h1--color">Metaverse</span>
          </h1>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your <br></br>
            imagination to reality at your comfort zone
          </p>
          <div className="search">
            <input id="search" placeholder="Search for location" />
            <button className=" btn btn-purple">
             Search
            </button>
          </div>
        </div>
        <div className="home-images">
          <img id="home--image-tr" src={HomeImage1} alt="home-image1" />
          <img id="home--image-tl" src={HomeImage2} alt="home-image2" />
          <img id="home--image-br" src={HomeImage3} alt="home-image3" />
          <img id="home--image-bl" src={HomeImage4} alt="home-image4" />
        </div>
      </div>

      <TextAd />

      <div className="catalogue-section mb-md">
        <h1>Inspiration for your next adventure</h1>
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
        </div>
      </div>

      <div className="NFT">
        <div className="NFT--description mt-md">
          <h1>Metabnb NFTs</h1>
          <p>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our customer
            access to loads of our exclusive services.
          </p>

          <div>
            <a className=" btn btn-white" href="#">
              Learn more
            </a>
          </div>
        </div>
        <div className="NFT--images">
          <NFTImages />
        </div>
      </div>

      <div className="footer-information">
        <Footer />
      </div>
    </div>
  )
}

export default Home;