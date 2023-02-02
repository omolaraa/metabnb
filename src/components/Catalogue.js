import React from "react";
import Rating from "../images/Rating.png";
import {ReactComponent as Heart} from "../images/Heart.svg";

const Catalogue = props => {
  return (
    <div> 
            <div className="catalogue--item"> 
               <div className="images" >
                <Heart id = 'heart' />
              <img id="home--image-tr" className="mb-sm" src={props.catalogueImage} alt="home-image1" />
               </div>
              <div className="catalogue--details-top mb-sm">
                <p className="p-left">{props.pTopLeft}</p>
                <p className="p-right"><b>{props.pTopRight}</b></p>
              </div>
              <div className="catalogue--details-buttom mb-sm">
                <p className="p-left">{props.pButtomLeft}</p>
                <p className="p-right">{props.pButtomRight}</p>
              </div>
              <img id="rating" src={Rating} alt="rating" />
            </div>

          </div>
  );
};

export default Catalogue;
