import React, { useState } from "react";
import { getTemplate, MobileLayoutTemplate } from "../../data/api";
import MobileLayout from "./MobileLayout";
import Options from "./Options";
import { customizationRootStyles } from "./style";
import { useParams } from "react-router-dom";

function Customization() {
  // @ts-ignore
  let { id } = useParams();
  const [shouldEdit, setShouldEdit] = useState(false);

  const editItem = (obj: any) => {
    setShouldEdit(true);
    console.log("edit invoked");
  };

  let template: MobileLayoutTemplate = getTemplate(id);
  return (
    <div className={customizationRootStyles}>
      <MobileLayout
        template={template}
        hasEditButton={false}
        editItem={editItem}
      />
      {shouldEdit ? (
        <Options
          onCloseClick={() => {
            setShouldEdit(false);
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Customization;
