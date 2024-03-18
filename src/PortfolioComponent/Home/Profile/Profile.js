import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""} Hello, I am{" "}
              <span className="highlighted-text">Abhishek Shettar</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
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
              <span className="profile-role-tagline">
                Knack of building Applications with Front-End and Back-End.
              </span>
            </span>
          </div>
          <div className="profile-options">
            {/* <button className="btn primary-btn">Hire Me </button> */}
            <a
              href="abhitachi-resume11.pdf"
              download="abhishek-resume.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>

        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
