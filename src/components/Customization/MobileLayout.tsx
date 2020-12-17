import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MobileLayoutTemplate } from "../../data/api";
import {
  editButtonStyles,
  editIconStyles,
  editIconContainerStyles,
  mobileLayoutStyles,
  mobileLaytoutRootStyles,
  layoutRootStyles,
  saveButtonStyles,
} from "./style";
import { buildLayout } from "../../helper";
import * as eva from "eva-icons";

interface IMobileLayoutProps {
  template: MobileLayoutTemplate;
  hasEditButton: boolean;
  editItem: any;
}

function MobileLayout(props: React.PropsWithChildren<IMobileLayoutProps>) {
  useEffect(() => {
    eva.replace();
  }, []);

  function editClickHandler(event: any) {
    // @ts-ignore
    const item = props.template.items[this.elementIndex];
    console.log("edit clicked");
    props.editItem(item);
  }

  let innerLayout = buildLayout(props.template);
  if (!props.hasEditButton) {
    innerLayout = innerLayout.map((element, index) => {
      return (
        <div className={editIconContainerStyles}>
          <div onClick={editClickHandler.bind({ elementIndex: index })}>
            <i
              data-eva="edit-outline"
              data-eva-fill="#ffff"
              className={editIconStyles}
            ></i>
          </div>
          {element}
        </div>
      );
    });
  }
  return props.hasEditButton ? (
    <div className={mobileLaytoutRootStyles}>
      <div className={mobileLayoutStyles} style={props.template.style}>
        {innerLayout}
        <Link
          to={"/customize/" + props.template.id}
          className={editButtonStyles}
        >
          Edit
        </Link>
      </div>
    </div>
  ) : (
    <div className={layoutRootStyles}>
      <div className={mobileLaytoutRootStyles}>
        <div className={mobileLayoutStyles} style={props.template.style}>
          {innerLayout}
        </div>
      </div>
      <div className={saveButtonStyles}>
        <button>Save</button>
      </div>
    </div>
  );
}

export default MobileLayout;
