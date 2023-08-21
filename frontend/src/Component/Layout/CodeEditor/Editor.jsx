// Editor.js
import React, { useState } from "react";
import "./codeEditor.css";

const Editor = ({ code, onChange }) => {
  return (
    <div className="Editor">
      <textarea
        value={code}
        onChange={(e) => onChange(e.target.value)}
        rows="10"
        cols="30"
      />
    </div>
  );
};

export default Editor;
