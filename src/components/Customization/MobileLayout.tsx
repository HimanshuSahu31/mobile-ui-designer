import React from "react";
import { getTemplate } from "../../data/api";
import { mobileLayoutStyles, mobileLaytoutRootStyles } from "./style";

interface IMobileLayoutProps {
  id: string;
}

function MobileLayout(props: React.PropsWithChildren<IMobileLayoutProps>) {
  let template: object = getTemplate(props.id);
  return (
    <div className={mobileLaytoutRootStyles}>
      <div className={mobileLayoutStyles}>{buildLayout(template)}</div>
    </div>
  );
}

function buildLayout(template: object) {
  const getTag = (type: string, text: string, styles: object) => {
    switch (type) {
      case "h1":
        return <h1 style={styles}>{text}</h1>;
      case "button":
        return <button style={styles}>{text}</button>;
      default:
        return <div style={styles}>{text}</div>;
    }
  };
  // @ts-ignore
  return template.items.map((item) =>
    getTag(item["type"], item["text"], item["style"])
  );
}

export default MobileLayout;
