import "animate.css";
import { motion } from "framer-motion/dist/framer-motion";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container ">
      <div className="profile-parent">
        <div className="profile-details">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="profile-details-name"
          >
            <span className="primary-text">
              {""} Hello, I am{" "}
              <span className="highlighted-text">Abhishek Shettar</span>
            </span>
          </motion.div>
          <div className="profile-details-role">
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="primary-text animate_animated animate_fadeInLeft"
            >
              {" "}
              <h1 className="floatingWord">
                {""}
                <TypeAnimation
                  repeat={Infinity}
                  sequence={[
                    "Full-Stack Developer 💻 ",
                    1000,
                    "",
                    1000,
                    // "UI/UX Developer",
                    // 1000,
                  ]}
                  speed={50}
                />
              </h1>
              <h3 className="staticWord">Full-Stack Developer 💻</h3>
              <span className="profile-role-tagline">
                Knack of building Applications with Front-End and Back-End.
              </span>
            </motion.span>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="profile-options"
          >
            {/* <button className="btn primary-btn">Hire Me </button> */}
            <a href="abhitachi-resume11.pdf" download="abhishek-resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="profile-picture"
        >
          <div className="profile-picture-background"></div>
        </motion.div>
      </div>
    </div>
  );
}
