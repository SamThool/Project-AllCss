import React from "react";
import "./codeEditor.css";
// import prettier from "prettier/standalone";
// import parserBabel from "prettier/parser-flow";
import format from "./format";

// import * as prettier from "https://unpkg.com/prettier@3.0.2/standalone.mjs";
// import prettierPluginBabel from "https://unpkg.com/prettier@3.0.2/plugins/babel.mjs";
// import prettierPluginEstree from "https://unpkg.com/prettier@3.0.2/plugins/estree.mjs";

function Editor({ code, onChange }) {
  // const formattedCode = prettier.format(code, {
  //   parser: "babel",
  //   plugins: [prettierPluginBabel, prettierPluginEstree],
  // });
  console.log(format(code));
  return (
    <div className="Editor">
      <textarea
        value={format(code)}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default Editor;
