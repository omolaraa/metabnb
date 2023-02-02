import React from "react";

const FooterCpa = props => {
  return (
    <div>
      <div className="cpa">
        <h3 className="mb-md">{props.heading}</h3>
        <ul>
          <li>{props.li1}</li>
          <li>{props.li2}</li>
          <li>{props.li3}</li>
          <li>{props.li4}</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterCpa;
