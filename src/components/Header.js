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
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </nav>
            </heading>
        </div>
    )
}

export default Header;