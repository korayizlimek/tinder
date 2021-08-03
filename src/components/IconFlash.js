import React, { useState } from "react";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { IconButton } from "@material-ui/core";

const IconFlash = () => {
  const [flash, setFlash] = useState(false);

  return (
    <div>
      <IconButton onClick={() => setFlash(!flash)}>
        <FlashOnIcon
          className={`card-button-icon ${
            flash ? "card-button-icon-active" : ""
          }`}
        />
      </IconButton>
    </div>
  );
};

export default IconFlash;
