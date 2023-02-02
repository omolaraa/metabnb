import React from "react";
import {ReactComponent as Next} from "../images/Next.svg";


const WalletOptions = (props) => {

    


    return (
        
            <div className="option">
             <div className="option--left">
             <img src={props.walletImage} alt='Metamask' />
              <h2>{props.walletName}</h2>
             </div>
             <Next id='next' />
            </div>         
    )
}

export default WalletOptions;