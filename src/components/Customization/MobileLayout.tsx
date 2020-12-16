import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getTemplate, MobileLayoutTemplate } from "../../data/api";
import {
  editButtonStyles,
  editIconStyles,
  editIconContainerStyles,
  mobileLayoutStyles,
  mobileLaytoutRootStyles,
} from "./style";
import { buildLayout } from "../../helper";
import * as eva from "eva-icons";

interface IMobileLayoutProps {
  id: string;
  hasEditButton: boolean;
}

function MobileLayout(props: React.PropsWithChildren<IMobileLayoutProps>) {
  useEffect(() => {
    eva.replace();
  }, []);

  let template: MobileLayoutTemplate = getTemplate(props.id);
  let innerLayout = buildLayout(template);
  if (!props.hasEditButton) {
    innerLayout = innerLayout.map((element) => {
      return (
        <div className={editIconContainerStyles}>
          <i
            data-eva="edit"
            data-eva-fill="#484c67"
            className={editIconStyles}
          ></i>{" "}
          {element}
        </div>
      );
    });
  }
  return (
    <div className={mobileLaytoutRootStyles}>
      <div className={mobileLayoutStyles} style={template.style}>
        {innerLayout}
        {props.hasEditButton ? (
          <Link to={"/customize/" + props.id} className={editButtonStyles}>
            Edit
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default MobileLayout;
