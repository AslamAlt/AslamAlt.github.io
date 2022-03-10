import * as React from "react";
import "./NavBar.css";

export const NavBar = (): React.ReactElement => {
  const name = "Aslam Althaf";
  return (
    <div className="nav-bar">
      <div style={{ verticalAlign: "middle" }}>{name}</div>
    </div>
  );
};
