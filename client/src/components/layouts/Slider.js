import React from "react";
import Carousel from "react-elastic-carousel";
import img1 from "../../../src/assets/img1.jpg";
import img2 from "../../../src/assets/img2.jpg";
import img3 from "../../../src/assets/img3.jpg";
import img4 from "../../../src/assets/img4.jpg";

const Slider = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <Carousel>
      <div className="box">
        <img src={img1} alt="img" />
        <p>Join us</p>
      </div>
      <div className="box">
        <img src={img2} alt="img" />
        <p>Join us</p>
      </div>
      <div className="box">
        <img src={img3} alt="img" />
        <p>Join us</p>
      </div>
      <div className="box">
        <img src={img4} alt="img" />
        <p>Join us</p>
      </div>
    </Carousel>
  );
};

export default Slider;
