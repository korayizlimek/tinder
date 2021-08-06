import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import IconButton from "@material-ui/core/IconButton";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Header({ backButton }) {
  const history = useHistory();
  return (
    <header className="header">
      <IconButton onClick={() => history.replace(backButton)}>
        {backButton ? (
          <ArrowBackIosIcon className="header-icon" fontSize="large" />
        ) : (
          <Link to="/profile">
            <PersonIcon className="header-icon" fontSize="large" />
          </Link>
        )}
      </IconButton>
      <IconButton color="secondary">
        <Link to="/">
          <img
            className="header-logo"
            src="https://www.pngkit.com/png/full/73-730019_tinder-logo-transparent-tinder-logo-png.png"
            alt="logo"
          />
        </Link>
      </IconButton>
      <IconButton>
        <Link to="/chat">
          <QuestionAnswerIcon className="header-icon" fontSize="large" />
        </Link>
      </IconButton>
    </header>
  );
}

export default Header;
