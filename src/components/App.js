import React from "react";
import Header from "./Header";
import '../styles/Styles';
import DesImage1 from '../images/DesImage1.png';

export default () => {
    return (
        <div className="container">
            <Header />
            <div className="home">
                <div className="description">
                    <h1>Rent a <span className="h1--color"> Place </span> away from <span className="h1--color">Home</span> in the <span className="h1--color">Metaverse</span></h1>
                    <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your <br></br>
                        imagination to reality at your comfort zone
                    </p>
                </div>
                <div className="description-images">
                <img src={DesImage1} />
                </div>
            </div>
        </div>
    )
}