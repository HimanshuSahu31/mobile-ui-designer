import React from "react";
import MobileLayout from "../Customization/MobileLayout";
import { carouselContainerStyles, templatesRootStyles } from "./style";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Templates() {
  const carouselSettings = {
    centerMode: true,
    swipeable: true,
    emulateTouch: true,
    showIndicators: false,
    centerSlidePercentage: 60,
  };

  return (
    <div className={templatesRootStyles}>
      <div className={carouselContainerStyles}>
        <Carousel {...carouselSettings}>
          <MobileLayout key="1" />
          <MobileLayout key="2" />
          <MobileLayout key="3" />
          <MobileLayout key="4" />
          <MobileLayout key="5" />
          <MobileLayout key="6" />
        </Carousel>
      </div>
    </div>
  );
}

export default Templates;
