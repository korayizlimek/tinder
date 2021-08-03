import React, { useState } from "react";
import StarRateIcon from "@material-ui/icons/StarRate";
import { IconButton } from "@material-ui/core";

const IconStar = () => {
  const [star, setStar] = useState(false);
  return (
    <div>
      <IconButton onClick={() => setStar(!star)}>
        <StarRateIcon
          className={`card-button-icon ${
            star ? "card-button-icon-active" : ""
          }`}
        />
      </IconButton>
    </div>
  );
};

export default IconStar;
