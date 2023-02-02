import React from "react";
import WalletOptions from "./WalletOptions";
import {ReactComponent as Delete} from "../images/Delete.svg";
import Metamask from "../images/Metamask.png";
import WalletConnect from "../images/WalletConnect.png";

const ConnectWallet = (props) => {


    return (
        <div className="wallet" id={props.display}>
         <div className="wallet--header">
            <h1>Connect Wallet</h1>
            <Delete id={props.delete} onClick = {props.deleteWallet} />
         </div>
         <div className="wallet--details">
            <p>Choose your preferred wallet:</p>
         <WalletOptions
            walletImage={Metamask}
            walletName = "Metamask"
          />
           <WalletOptions
            walletImage={WalletConnect}
            walletName = "WalletConnect"
          />
         </div>
        </div>
    )
}

export default ConnectWallet;