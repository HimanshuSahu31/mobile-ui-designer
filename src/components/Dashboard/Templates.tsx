import React from "react";
import MobileLayout from "../Customization/MobileLayout";
import { templatesRootStyles } from "./style";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Templates() {
  return (
    <div className={templatesRootStyles}>
      <div>
        <Carousel>
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
