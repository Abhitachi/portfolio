import React, { useEffect } from "react";
// import load1 from "../../../src/images/load2.gif";
// import imgBack from "../../../src/images/mailz.jpeg";
import { motion, useAnimation } from "framer-motion/dist/framer-motion";
import { useInView } from "react-intersection-observer";
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

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      // Start the fade-in and translate up animations
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div
      className="main-container fadeIn"
      ref={ref}
      style={{ minHeight: "100vh" }}
      id={props.id || ""}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        style={{ width: "100%", opacity: 0 }}
      >
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
      </motion.div>
    </div>
  );
}
