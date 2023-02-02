import React from "react";

const Button = props => {

    return (
        <div>
           <button className=" btn btn-purple">{props.btnTxt}</button>
        </div>
    )
}

export default Button; 