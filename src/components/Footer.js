import React from "react";
import FooterCpa from "./FooterCpa";
import { ReactComponent as Logo } from "../images/Logo.svg";
import { ReactComponent as Fb } from "../images/facebook.svg";
import { ReactComponent as Ig } from "../images/instagram.svg";
import { ReactComponent as Twitter } from "../images/twitter.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer--socials">
        <div className="logo mb-lg">
          <Logo id="logo-white" />
        </div>
        <div className="socials">
          <Fb id="fb" />
          <Ig id="ig" />
          <Twitter id="twitter" />
        </div>
      </div>
      <div className="other">
       <FooterCpa
       heading="Community"
       li1="NFT"
       li2="Tokens"
       li3="Landlords"
       li4="Discord"
        />
         <FooterCpa
       heading="Places"
       li1="Castle"
       li2="Farms"
       li3="Beach"
       li4="Learn more"
        />
         <FooterCpa
       heading="About us"
       li1="Road map"
       li2="Creators"
       li3="Career"
       li4="Contact us"
        />
      </div>
    </div>
  );
};

export default Footer;
