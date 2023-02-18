import React from "react";
import { Link } from "react-router-dom";
import "./link.scss";

const Linking = ({ title, ...rest }) => {
  return (
    <Link className="link" {...rest}>
      {title}
    </Link>
  );
};

export default Linking;
