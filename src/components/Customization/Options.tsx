import React, { useEffect } from "react";
import {
  closeButtonStyles,
  editItemBoxStyles,
  optionsRootStyles,
} from "./style";
import * as eva from "eva-icons";

export interface IOptionProps {
  onCloseClick: any;
}
function Options(props: React.PropsWithChildren<IOptionProps>) {
  useEffect(() => {
    eva.replace();
  }, []);

  function onInputUpdate(event: any) {
    console.log(event.target.value);
  }

  return (
    <div className={optionsRootStyles}>
      <div className={editItemBoxStyles}>
        <div onClick={props.onCloseClick} className={closeButtonStyles}>
          <i data-eva="close" data-eva-fill="#484c67"></i>
        </div>
        <div>
          <label>Font Size:</label>
          <input type="number" onChange={onInputUpdate} />
        </div>
        <div>
          <button>Cancel</button>
          <button onClick={props.onCloseClick}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default Options;
