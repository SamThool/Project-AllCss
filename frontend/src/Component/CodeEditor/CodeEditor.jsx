import React, { useState } from "react";
import Editor from "./Editor";
import "./codeEditor.css";
import data from "../../codes/codes.json";
import prettier from "prettier/standalone";
import parserHtml from "prettier/parser-html";

const CodeEditor = () => {
  const [htmlCode, setHtmlCode] = useState(
    ` <div class = "toggle-switch"> <ul><li> hbsdfjhb</li><li> hbsdfjhb</li><li> hbsdfjhb</li><li> hbsdfjhb</li> </ul> </div>`
  );
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

  // const formattedCode = prettier.format(combinedCode, {
  //   parser: "html",
  //   plugins: [parserHtml],
  // });

  return (
    <div className="CodeEditor">
      <div className="codeEditorBTN">
        <button className="html-btn" onClick={showHTML}>
          HTML
        </button>
        <button className="css-btn" onClick={showCSS}>
          CSS
        </button>
        <button className="js-btn" onClick={showJS}>
          JS
        </button>
        <button className="edit-btn">Edit</button>
      </div>
      <div className="edits">
        <div id="html">
          <Editor code={htmlCode} onChange={setHtmlCode} />
        </div>
        <div className="none" id="css">
          {/* <Editor code={cssCode} onChange={setCssCode} /> */}
        </div>
        <div className="none" id="js">
          {/* <Editor code={jsCode} onChange={setJsCode} /> */}
        </div>
        <iframe title="Preview" width={320} srcDoc={combinedCode} />
      </div>
    </div>
  );
};

export default CodeEditor;
