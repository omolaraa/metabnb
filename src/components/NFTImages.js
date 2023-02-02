import React from "react";
import nftImg1 from "../images/nftImg1.png";
import nftImg2 from "../images/nftImg2.png";
import nftImg3 from "../images/nftImg3.png";

const NFTImages = () => {
    return (
        <div>
            <div className="images">
            <img id="nft--image-top" src={nftImg1} alt="nft-image1" />
            <img id="nft--image-left" src={nftImg2} alt="nft-image2" />
            <img id="nft--image-right" src={nftImg3} alt="nft-image3" />
            </div>
        </div>
    )
}

export default NFTImages;