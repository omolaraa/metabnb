import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../images/Logo.svg";
import Locations from "./Locations";
import Home from "./Home";
import ConnectWallet from "./ConnectWallet";
import "../styles/Styles";

const App = () => {
  const [display, setDisplay] = useState("hide");
  const [container, setContainer] = useState("container");

  const walletDisplay = () => {
    setDisplay("show");
    setContainer("container-bg");
  };
  const deleteWallet = () => {
    setDisplay("hide");
    setContainer("container");
  };

  return (
    <>
      <div className={container}>
        <div className="wallet--container">
          <ConnectWallet display={display} deleteWallet={deleteWallet} />
        </div>

        <header className="header">
          <div className="logo">
            <Logo id="logo-gradient" />
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/locations">Place to stay</Link>
              </li>
              <li>
                <Link to="/">NFTs</Link>
              </li>
              <li>
                <Link to="/">Community</Link>
              </li>
            </ul>
          </nav>
          <button className=" btn btn-purple" onClick={walletDisplay}>
            Connect Wallet
          </button>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
