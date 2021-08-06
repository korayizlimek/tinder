import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

function NotResult() {
  return (
    <div className="notResult">
      <HighlightOffIcon className="notResult-icon" />
      Character Not Found!
    </div>
  );
}

export default NotResult;
