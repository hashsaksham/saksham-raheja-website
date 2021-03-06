import React from "react";
import { IconContext } from "react-icons";
import { activeTheme } from "../../styles/themes";

const SocialIconsContainer = ({ data, size, color }) => {
  return (
    <IconContext.Provider
      value={{
        color: color ? color : activeTheme.qurbat,
        size: size ? size : "1.8rem",
      }}
    >
      {data.map(({ icon, url }, i) => {
        return (
          <a key={i} target="_blank" rel="noreferrer" href={url}>
            {icon}
          </a>
        );
      })}
    </IconContext.Provider>
  );
};

export default SocialIconsContainer;
