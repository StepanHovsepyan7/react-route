import React from "react";

function Card({ imagUrl, title }) {
  return (
    
      <div className=" parentShop  text-white cursor-pointer">
        <img className="dummyImages" src={imagUrl} alt={title} />
        <h4>{title}</h4>
    </div>
  );
}

export default Card;
