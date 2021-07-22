import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>HEADER</h1>
      </header>
    </React.Fragment>
  );
}

export default Header;
