import React from "react";
import "./textArea.scss";

const TextAre = ({ ...rest }) => {
  return (
    <div>
      <textarea className="text-area" {...rest}></textarea>
    </div>
  );
};

export default TextAre;
