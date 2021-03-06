import { css } from "emotion";

export const customizationRootStyles = css`
  display: flex;
  flex: 1;
`;

export const layoutRootStyles = css`
  flex: 3 1;
  margin: 30px;
  background-color: #dfdfe6;
  border-radius: 1em/1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const optionsRootStyles = css`
  flex: 1 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const editItemBoxStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 200px;
`;
export const closeButtonStyles = css`
  align-self: flex-end;
`;

export const mobileLaytoutRootStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dfdfe6;
`;

export const mobileLayoutStyles = css`
  height: 600px;
  width: 300px;
  border-radius: 1.8em/1.5em;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const editButtonStyles = css`
  position: absolute;
  top: 5%;
  right: 5%;
`;

export const editIconContainerStyles = css`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 15px;
  position: relative;
`;

export const editIconStyles = css`
  position: absolute;
  top: -5%;
  right: -5%;
`;

export const saveButtonStyles = css`
  align-self: flex-end;
  padding-bottom: 50px;
`;
