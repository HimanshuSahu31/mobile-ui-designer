import { css } from "emotion";

export const sidebarRootStyles = css`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px;

  a {
    text-decoration: none;
    color: #cccbce;
    padding: 8px 18px 15px 15px;
  }

  span {
    padding: 0px 10px;
  }
`;

export const logoutButtonStyles = css``;

export const topNavLinksStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 300px;
`;

export const bottomNavLinksStyles = css``;

export const iconStyles = css`
  position: relative;
  top: 5px;
`;

export const selectedNavLink = css`
  background-color: #f8f9fd;
  font-weight: bold;
  border-radius: 0.8em/0.7em;

  span {
    color: #484c67;
  }
`;
