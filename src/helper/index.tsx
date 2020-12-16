import React from "react";
import { MobileLayoutTemplate } from "../data/api";

export const buildLayout = function (template: MobileLayoutTemplate) {
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
  return template.items.map((item) =>
    getTag(item["type"], item["text"], item["style"])
  );
};
