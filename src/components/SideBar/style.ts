import { css } from "emotion";

export const sidebarRootStyles = css`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
`;

export const logoutButtonStyles = css``;

export const topNavLinksStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 300px;
`;

export const bottomNavLinksStyles = css`
  display: flex;
  flex-direction: column;
`;

export const iconStyles = css`
  position: relative;
  top: 5px;
`;

export const navigationLinkStyles = css`
  text-decoration: none;
  color: #cccbce;
  padding: 8px 18px 15px 15px;

  a:hover {
    background-color: #f8f9fd;
    border-radius: 0.6em/0.5em;
  }

  span {
    padding: 0px 10px;
  }
`;

export const selectedNavLink = css`
  .selectedNavLink {
    background-color: #f8f9fd;
    font-weight: bold;
    border-radius: 0.6em/0.5em;

    span {
      color: #484c67;
    }
  }
`;
