import React from "react";
import Animations from "../../Utilities/Animations";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";

import css from "../../assets/skills/css.png";
import html from "../../assets/skills/html.png";
import java from "../../assets/skills/java.png";
import javaScript from "../../assets/skills/javascript.png";
import mongodb from "../../assets/skills/mongodb.png";
import sql from "../../assets/skills/mysql.png";
import node from "../../assets/skills/node.png";
import react from "../../assets/skills/react.png";
import tailwind from "../../assets/skills/tailwind.png";
import typescript from "../../assets/skills/typescript.png";

import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "A Software Developer Enthusiast, proficient in programming languages such as Java and JavaScript. Strong background in object-oriented programming, functional programming, database management and software development lifecycle. A quick learner with strong problem-solving skills, able to work efficiently both independently and in a team environment.",
    highlights: {
      bullets: [
        "Full Stack web development",
        "React JS framework",
        "Redux for State Mnanagement",
        "Building REST API",
        "Managing database",
      ],
      heading: "Skills",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <section className="skills">
              <h3>Skills</h3>
              <div className="skill-container">
                <div className="skill-card">
                  <p>Java</p>
                  <img src={java} alt="" />
                </div>
                <div className="skill-card">
                  <p>JavaScript</p>
                  <img src={javaScript} alt="" />
                </div>

                <div className="skill-card">
                  <p>React</p>
                  <img src={react} alt="" />
                </div>

                <div className="skill-card">
                  <p>MongoDB</p>
                  <img src={mongodb} alt="" />
                </div>

                <div className="skill-card">
                  <p>Node</p>
                  <img src={node} alt="" />
                </div>

                <div className="skill-card">
                  <p>HTML</p>
                  <img src={html} alt="" />
                </div>

                <div className="skill-card">
                  <p>CSS</p>
                  <img src={css} alt="" />
                </div>

                <div className="skill-card">
                  <p>Tailwind CSS</p>
                  <img src={tailwind} alt="" />
                </div>

                <div className="skill-card">
                  <p>MYSQL</p>
                  <img src={sql} alt="" />
                </div>
                <div className="skill-card">
                  <p>TypeScript</p>
                  <img src={typescript} alt="" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
