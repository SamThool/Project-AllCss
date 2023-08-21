import React from "react";
import "./contact.css";
import {
  FaWhatsappSquare,
  FaTelegram,
  FaInstagramSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaLinkedin,
  FaMailBulk,
  FaYoutube,
} from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="con">
        <div className="conLogo">
          All
          <br />
          CSS
        </div>

        <div className="conDes">
          <h1>Thank You</h1>
          <h2>For All The Support</h2>
        </div>
      </div>
      <div className="con ">
        <div className="favs falogos-1">
          <a href="https://github.com/SamThool/SamThool">
            <FaWhatsappSquare className="falogo" /> Whats App / 9370048698
          </a>
          <a href="https://github.com/SamThool/SamThool">
            <FaTelegram className="falogo" /> Telegram / All CSS
          </a>
          <a href="https://github.com/SamThool/SamThool">
            <FaInstagramSquare className="falogo" /> Instagram / AllCSS2002
          </a>
          <a href="https://github.com/SamThool/SamThool">
            <FaTwitterSquare className="falogo" /> Twitter / AllCSS2002
          </a>
        </div>
        <div className="favs   falogos-2">
          <a href="https://github.com/SamThool/SamThool">
            <FaGithubSquare className="falogo" /> Github / AllCSS
          </a>
          <a href="https://github.com/SamThool/SamThool">
            <FaLinkedin className="falogo" /> Linked In / AllCSS
          </a>
          <a href="https://github.com/SamThool/SamThool">
            <FaMailBulk className="falogo" /> Mail / Allcss@outlook.com
          </a>
          <a href="https://github.com/SamThool/SamThool">
            <FaYoutube className="falogo" /> Youtube / AllCSS
          </a>
        </div>
      </div>
      <div className="con">
        <div className="mailBox">
          <input
            className="user"
            type="text"
            placeholder="Any - Name / Email / Contact"
          />
          <input className="desc" type="text" placeholder="Message" />
          <button>Send</button>
        </div>
        <div className="mailInfo">
          <h1>Message Me</h1>
          <br />
          <br />
          <h3>
            You can send me a message from here.
            <br />
            <br />
            If you Expect any reply Leave your Contact , mail or name.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
