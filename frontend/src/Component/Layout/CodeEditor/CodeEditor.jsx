import React, { useState } from "react";
import Editor from "./Editor";
import "./codeEditor.css";
import data from "../../../codes/codes.json";

const CodeEditor = () => {
  const [htmlCode, setHtmlCode] = useState(data.html);
  const [cssCode, setCssCode] = useState(data.css);
  const [jsCode, setJsCode] = useState(data.js);

  const showHTML = () => {
    document.getElementById("html").classList.remove("none");
    document.getElementById("css").classList.add("none");
    document.getElementById("js").classList.add("none");
  };
  const showCSS = () => {
    document.getElementById("css").classList.remove("none");
    document.getElementById("html").classList.add("none");
    document.getElementById("js").classList.add("none");
  };
  const showJS = () => {
    document.getElementById("css").classList.add("none");
    document.getElementById("html").classList.add("none");
    document.getElementById("js").classList.remove("none");
  };

  const combinedCode = `
  <html>
  <head>
    <style>
      ${cssCode}
    </style>
  </head>
  <body>
    ${htmlCode}
    <script>
      ${jsCode}
    </script>
  </body>
  </html>
`;
  return (
    <div className="CodeEditor">
      <button onClick={showHTML}>HTML</button>
      <button onClick={showCSS}>CSS</button>
      <button onClick={showJS}>JS</button>
      <div className="edits">
        <div id="html">
          <Editor code={htmlCode} onChange={setHtmlCode} />
        </div>
        <div className="none" id="css">
          <Editor code={cssCode} onChange={setCssCode} />
        </div>
        <div className="none" id="js">
          <Editor code={jsCode} onChange={setJsCode} />
        </div>
        <iframe title="Preview" srcDoc={combinedCode} />
      </div>
    </div>
  );
};

export default CodeEditor;
