import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IconButton } from "@material-ui/core";

const IconFavorite = () => {
  const [favorite, setFavorite] = useState(false);

  return (
    <div>
      <IconButton onClick={() => setFavorite(!favorite)}>
        <FavoriteIcon
          className={`card-button-icon ${
            favorite ? "card-button-icon-active" : ""
          }`}
        />
      </IconButton>
    </div>
  );
};

export default IconFavorite;
