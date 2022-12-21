import React from "react";
import Logo from '../images/Logo.png';

const Header = () => {
    return (
        <div>
            <heading className="header">
                <div className="logo">
                    <img src={Logo} />
                </div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Place to stay</li>
                        <li>NFTs</li>
                        <li>Community</li>
                    </ul>
                </nav>
                <a href="#" className="btn-purple">Connect wallet</a>
            </heading>
        </div>
    )
}

export default Header;