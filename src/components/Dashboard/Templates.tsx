import React from "react";
import MobileLayout from "../Customization/MobileLayout";
import { carouselContainerStyles, templatesRootStyles } from "./style";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { listTemplates, MobileLayoutTemplate } from "../../data/api";

function Templates() {
  const carouselSettings = {
    centerMode: true,
    swipeable: true,
    emulateTouch: true,
    showIndicators: false,
    centerSlidePercentage: 60,
  };

  let templates: JSX.Element[] = listTemplates().map(
    (t: MobileLayoutTemplate) => (
      <MobileLayout
        key={t.id}
        template={t}
        hasEditButton={true}
        editItem={null}
      />
    )
  );

  return (
    <div className={templatesRootStyles}>
      <div className={carouselContainerStyles}>
        <Carousel {...carouselSettings}>{templates}</Carousel>
      </div>
    </div>
  );
}

export default Templates;
