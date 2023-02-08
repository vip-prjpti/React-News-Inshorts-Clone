import React from "react";
import "./Footer.css";
import Instagram from "@mui/icons-material/Instagram";
import Linkedin from "@mui/icons-material/LinkedIn";
import LinkIcon from '@mui/icons-material/Link';

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="https://www.linkedin.com/in/piyush-eon" target="__blank">
          Vipul Prajapati
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
      <a href="https://www.instagram.com/vip_prjpti/" target="__blank"> <Instagram/></a>
      <a href="https://www.linkedin.com/in/thatvipulprajapati/" target="__blank"> <Linkedin/></a>
      <a href="https://www.linkedin.com/in/thatvipulprajapati/" target="__blank"> <LinkIcon/></a>
      </div>
    </div>
  );
};

export default Footer;