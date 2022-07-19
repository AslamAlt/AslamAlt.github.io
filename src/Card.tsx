import React from "react";
import "./Card.css";

export const Card = ({
  children,
}: {
  children: React.ReactElement[];
}): React.ReactElement => <div className="card">{children}</div>;
