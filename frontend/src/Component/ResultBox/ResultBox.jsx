import React from "react";
import MiniEditor from "./MiniEditor.jsx";
import "./resultbox.css";

const ResultBox = () => {
  return (
    <>
      <div className="ResultBox">
        <div className="info">
          <h1>Custom Detail Card</h1>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
          </ul>
          <h3>
            This Is Description This Is Description This Is Description This Is
            This Is Description This Is Description This Is Description This Is
            This Is Description This Is Description This Is Description This Is
            This Is Description This Is Description This Is Description This Is
            This Is Description This Is Description This Is Description This Is
            Description
          </h3>
          <p>Created By Samu</p>
        </div>
        <div className="codePreview">
          <MiniEditor />
        </div>
      </div>
    </>
  );
};

export default ResultBox;
