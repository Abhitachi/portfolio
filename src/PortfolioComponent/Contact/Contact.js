import React from "react";
// import load1 from "../../../src/images/load2.gif";
// import imgBack from "../../../src/images/mailz.jpeg";
import { TypeAnimation } from "react-type-animation";
import Animations from "../../Utilities/Animations";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import "./Contact.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="main-container fadeIn" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h1>Thank You For Visiting the Page</h1>{" "}
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/abhishek-shettar-46342315b/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://discord.com/invite/dy2XygGY">
              <i className="fa-brands fa-discord"></i>
            </a>
            <a href="https://github.com/Abhitachi">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.instagram.com/abhishek___shettar/">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://medium.com/@abhishekshetter1999">
              <i className="fa-brands fa-medium"></i>
            </a>
            <a href="https://twitter.com/abhishekshetter">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
          <h2 className="title">
            <a href="mailto:abhishekshetter1999@gmail.com" target="_blank">
              <TypeAnimation
                repeat={Infinity}
                sequence={["Get In Touch 📧", 1000, "", 1000]}
                speed={20}
              />
            </a>
          </h2>
        </div>
        <div className="back-form"></div>
      </div>
    </div>
  );
}
