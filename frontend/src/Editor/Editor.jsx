import React, { useEffect, useState } from "react";
import "./editor.css";

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { less } from "@codemirror/lang-less";
import { xml } from "@codemirror/lang-xml";
import { githubDark } from "@uiw/codemirror-theme-github";

const Editor = () => {
  const [htmlCode, setHtmlCode] = useState(`<div class="card">
  <div class="boxshadow"></div>
  <div class="main">
      <div class="top"></div>
      <div class="left side"></div>
      <div class="right side"></div>
      <div class="title">TITLE</div>
      <div class="button-container">
          <button class="button"><svg class="svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" stroke="red" fill="none" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
          </button>
          <button class="button"><svg class="svg twitter" xmlns="http://www.w3.org/2000/svg" height="24"
                  width="24" fill="red" viewBox="0 0 512 512">
                  <path
                      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                  </path>
              </svg>
          </button>
          <button class="button"><svg class="svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path
                      d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                  </path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
          </button>
      </div>
  </div>
</div>

<div class="card">
  <div class="boxshadow"></div>
  <div class="main">
      <div class="top"></div>
      <div class="left side"></div>
      <div class="right side"></div>
      <div class="title">TITLE</div>
      <div class="button-container">
          <button class="button"><svg class="svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" stroke="red" fill="none" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
          </button>
          <button class="button"><svg class="svg twitter" xmlns="http://www.w3.org/2000/svg" height="24"
                  width="24" fill="red" viewBox="0 0 512 512">
                  <path
                      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                  </path>
              </svg>
          </button>
          <button class="button"><svg class="svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path
                      d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                  </path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
          </button>
      </div>
  </div>
</div>

<div class="card">
  <div class="boxshadow"></div>
  <div class="main">
      <div class="top"></div>
      <div class="left side"></div>
      <div class="right side"></div>
      <div class="title">TITLE</div>
      <div class="button-container">
          <button class="button"><svg class="svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" stroke="red" fill="none" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
          </button>
          <button class="button"><svg class="svg twitter" xmlns="http://www.w3.org/2000/svg" height="24"
                  width="24" fill="red" viewBox="0 0 512 512">
                  <path
                      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                  </path>
              </svg>
          </button>
          <button class="button"><svg class="svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path
                      d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                  </path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
          </button>
      </div>
  </div>
</div>

<div class="card">
  <div class="boxshadow"></div>
  <div class="main">
      <div class="top"></div>
      <div class="left side"></div>
      <div class="right side"></div>
      <div class="title">TITLE</div>
      <div class="button-container">
          <button class="button"><svg class="svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" stroke="red" fill="none" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
          </button>
          <button class="button"><svg class="svg twitter" xmlns="http://www.w3.org/2000/svg" height="24"
                  width="24" fill="red" viewBox="0 0 512 512">
                  <path
                      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                  </path>
              </svg>
          </button>
          <button class="button"><svg class="svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path
                      d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                  </path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
          </button>
      </div>
  </div>
</div>`);
  const [cssCode, setCssCode] = useState(`* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: #212121;
    min-height: 100vh;
    width: 100%;
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
    padding: 30px;
    justify-content: center;
    align-items: center;
  }
  
  .card {
    position: relative;
    height: 300px;
    width: 230px;
    
    &:nth-child(2) {
      filter: hue-rotate(300deg) brightness(1.3);
    }
    &:nth-child(3) {
      filter: hue-rotate(200deg) brightness(1.5);
    }
    &:nth-child(4) {
      filter: hue-rotate(60deg) brightness(3);
    }
    .boxshadow {
      position: absolute;
      height: 100%;
      width: 100%;
      border: 1px solid red;
      transform: scale(0.8);
      box-shadow: rgba(255, 0, 0, 1) 0px 30px 70px 0px;
      transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
  
    .main {
      width: 230px;
      height: 300px;
      overflow: hidden;
      background: red;
      background: linear-gradient(
        0deg,
        rgb(62, 0, 0) 0%,
        rgba(255, 0, 0, 1) 60%,
        rgb(62, 0, 0) 100%
      );
      position: relative;
      clip-path: polygon(
        0 0,
        100% 0,
        100% 40px,
        100% calc(100% - 40px),
        calc(100% - 40px) 100%,
        40px 100%,
        0 calc(100% - 40px)
      );
      box-shadow: rgba(255, 0, 0, 1) 0px 7px 29px 0px;
      transition: all 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    
      .top {
        position: absolute;
        top: 0px;
        left: 0;
        width: 0px;
        height: 0px;
        z-index: 2;
        border-top: 115px solid black;
        border-left: 115px solid transparent;
        border-right: 115px solid transparent;
        transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
      }
    
      .side {
        position: absolute;
        width: 100%;
        top: 0;
        transform: translateX(-50%);
        height: 101%;
        background: black;
        clip-path: polygon(0% 0%, 50% 0, 95% 45%, 100% 100%, 0% 100%);
        transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) 1s;
      }
    
      .left {
        left: 0;
      }
      .right {
        right: 0;
        transform: translateX(50%) scale(-1, 1);
      }
    
      .title {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 90px;
        font-weight: bold;
        font-size: 25px;
        opacity: 0;
        z-index: -1;
        transition: all 0.2s ease-out 0s;
      }
    
      .button-container {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
    
        .button {
          position: absolute;
          transform: translateX(-50%);
          padding: 5px 10px;
          clip-path: polygon(0 0, 100% 0, 81% 100%, 21% 100%);
          background: black;
          border: none;
          color: white;
          display: grid;
          place-content: center;
          transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
          .svg {
            width: 15px;
            transition: all 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86);
          }
    
          &:nth-child(1) {
            bottom: 300px;
            transition-delay: 0.4s;
          }
          &:nth-child(2) {
            bottom: 300px;
            transition-delay: 0.6s;
          }
          &:nth-child(3) {
            bottom: 300px;
            transition-delay: 0.8s;
          }
    
          &:hover {
            .svg {
              transform: scale(1.2);
            }
          }
    
          &:active {
            .svg {
              transform: scale(0.7);
            }
          }
        }
      }
    }
  }
  
  
  .card {
    &:hover {
      .main {
        transform: scale(1.1);
        .top {
          top: -50px;
        }
        .left {
          left: -50px;
          transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.1s;
        }
        .right {
          right: -50px;
          transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.1s;
        }
        .title {
          opacity: 1;
          transition: all 0.2s ease-out 1.3s;
        }
  
        .button-container {
          .button {
            &:nth-child(1) {
              bottom: 80px;
              transition-delay: 0.8s;
            }
            &:nth-child(2) {
              bottom: 40px;
              transition-delay: 0.6s;
            }
            &:nth-child(3) {
              bottom: 0;
              transition-delay: 0.4s;
            }
          }
        }
      }
    }
  }
  `);
  const [jsCode, setJsCode] = useState("");
  const [output, setOutput] = useState("");

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

  useEffect(() => {
    UpdateOutput();
  }, [htmlCode, cssCode, jsCode]);

  const UpdateOutput = () => {
    const Code = `
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
    setOutput(Code);
  };
  return (
    <>
      <div className="EditorNav">
        <button onClick={showHTML}>HTML</button>
        <button onClick={showCSS}>CSS</button>
        <button onClick={showJS}>JAVASCRIPT</button>
      </div>
      <div className="Editor">
        <div className="codeWindows">
          <div className="htmlbox" id="html">
            <CodeMirror
              className="htmlCode"
              value={htmlCode}
              extensions={[xml({ jsx: true })]}
              onChange={(value, viewUpdate) => {
                setHtmlCode(value);
              }}
              theme={githubDark}
            />
          </div>
          <div className="cssbox none" id="css">
            <CodeMirror
              className="cssCode"
              value={cssCode}
              extensions={[less({ jsx: true })]}
              onChange={(value, viewUpdate) => {
                setCssCode(value);
              }}
              theme={githubDark}
            />
          </div>
          <div className="jsbox none" id="js">
            <CodeMirror
              className="jsCode"
              value={jsCode}
              extensions={[javascript({ jsx: true })]}
              onChange={(value, viewUpdate) => {
                setJsCode(value);
              }}
              theme={githubDark}
            />
          </div>
        </div>
        <div className="previewbox">
          <iframe
            title="Preview"
            className="Editoriframe"
            srcDoc={output}
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Editor;
