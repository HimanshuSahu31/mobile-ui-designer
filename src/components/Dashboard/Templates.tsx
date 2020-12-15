import React from "react";
import Slider from "react-slick";
import MobileLayout from "../Customization/MobileLayout";
import { templatesRootStyles } from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Templates() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <div className={templatesRootStyles}>
      <div>
        <Slider {...settings}>
          <MobileLayout key="1" />
          <MobileLayout key="2" />
          <MobileLayout key="3" />
          <MobileLayout key="4" />
          <MobileLayout key="5" />
          <MobileLayout key="6" />
        </Slider>
      </div>
    </div>
  );
}

export default Templates;
