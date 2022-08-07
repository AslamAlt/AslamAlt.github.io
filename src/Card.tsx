import React from "react";
import "./Card.scss";

export const bg = "rgb(252, 243, 233)";
export const Card = ({
  children,
  style,
}: {
  children: React.ReactElement[];
  style?: React.CSSProperties;
}): React.ReactElement => (
  <div className="card" style={style}>
    {children}
  </div>
);
