// import React, { useState, useEffect } from "react";
// import * as prettier from "prettier/standalone.mjs";
// import prettierPluginBabel from "https://unpkg.com/prettier@3.0.2/plugins/babel.mjs";
// import prettierPluginEstree from "https://unpkg.com/prettier@3.0.2/plugins/estree.mjs";

// function FormatCode(code) {
//   const [formattedCode, setFormattedCode] = useState("");
//   useEffect(() => {
//     async function formatCode() {
//       try {
//         const formatted = await prettier.format(code, {
//           parser: "babel",
//           plugins: [prettierPluginBabel, prettierPluginEstree],
//         });
//         setFormattedCode(formatted);
//       } catch (error) {
//         console.error("Error formatting code:", error);
//       }
//     }
//     formatCode();
//   }, [code]);
//   // console.log(formattedCode);
//   return <div>{formattedCode}</div>;
// }

// export default FormatCode;
