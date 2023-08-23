// import React, { useEffect } from "react";
// import * as prettier from "https://unpkg.com/prettier@3.0.2/standalone.mjs";
// import prettierPluginBabel from "https://unpkg.com/prettier@3.0.2/plugins/babel.mjs";
// import prettierPluginEstree from "https://unpkg.com/prettier@3.0.2/plugins/estree.mjs";

// function format(code) {
//   useEffect(async () => {
//     const formattedCode = await prettier.format(code, {
//       parser: "babel",
//       plugins: [prettierPluginBabel, prettierPluginEstree],
//     });
//   }, []);

//   console.log(formattedCode);

//   return <div>{formattedCode}</div>;
// }

// export default format;

import React, { useState, useEffect } from "react";
import * as prettier from "prettier/standalone.mjs";
import prettierPluginBabel from "https://unpkg.com/prettier@3.0.2/plugins/babel.mjs";
import prettierPluginEstree from "https://unpkg.com/prettier@3.0.2/plugins/estree.mjs";

function FormatCode({ code }) {
  const [formattedCode, setFormattedCode] = useState(null);

  useEffect(() => {
    async function formatCode() {
      try {
        const formatted = await prettier.format(code, {
          parser: "babel",
          plugins: [prettierPluginBabel, prettierPluginEstree],
        });
        setFormattedCode(formatted);
      } catch (error) {
        console.error("Error formatting code:", error);
      }
    }
    formatCode();
  }, [code]);

  return <div>{formattedCode}</div>;
}

export default FormatCode;
