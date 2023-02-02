import React from "react";
import TextAdIcon1 from '../images/TextAdIcon1.png';
import TextAdIcon2 from '../images/TextAdIcon2.png';
import TextAdIcon3 from '../images/TextAdIcon3.png';

const TextAd = () => {
    return (
        <div>
           <div className="text-ads">
    
            <img id="icon-1" src={TextAdIcon1} alt = 'icon 1' />
            <img id="icon-2" src={TextAdIcon2} alt = 'icon 2' />
            <img id="icon-3" src={TextAdIcon3} alt = 'icon 3' />

      </div>
        </div>
    )
}

export default TextAd;