import React from "react";

const Button = ({ name, status, content }) => {
  return (
    <button className={name} onClick={(e) => status(e)}>
      {content}
    </button>
  );
};

export default Button;
