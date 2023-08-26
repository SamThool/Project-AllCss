// import React, { useState, useEffect } from "react";
// import "./codeEditor.css";
// import FormatCode from "./FormatCode";

// import html from "../../codes/html.js";

// import * as prettier from "prettier/standalone.mjs";
// import prettierPluginBabel from "https://unpkg.com/prettier@3.0.2/plugins/babel.mjs";
// import prettierPluginEstree from "https://unpkg.com/prettier@3.0.2/plugins/estree.mjs";

// import CodeMirror from "@uiw/react-codemirror";
// import { githubLight, githubDark } from "@uiw/codemirror-theme-github";
// import { javascript } from "@codemirror/lang-javascript";

// function Editor({ code, onChange }) {
//   // const [formattedCode, setFormattedCode] = useState("");
//   // useEffect(() => {
//   //   async function formatCode() {
//   //     try {
//   //       const formatted = await prettier.format(code, {
//   //         parser: "babel",
//   //         plugins: [prettierPluginBabel, prettierPluginEstree],
//   //       });
//   //       setFormattedCode(formatted);
//   //     } catch (error) {
//   //       console.error("Error formatting code:", error);
//   //     }
//   //   }
//   //   formatCode();
//   // }, [code]);
//   // console.log(formattedCode);
//   return (
//     <div className="Editor">
//       {/* <CodeMirror
//     //     value={formattedCode}
//     //     height="400px"
//     //     width="500px"
//     //     theme={githubDark}
//     //     options={{
//     //       mode: "htmlmixed",
//     //     }}
//     //   /> */}
//       <textarea value={<html />} onChange={(e) => onChange(e.target.value)} />
//     </div>
//   );
// }

// export default Editor;
