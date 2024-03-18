import React from "react";
// import OwlCarousel from "react-owl-carousel";

import foodapp from "../../assets/Project/foodapp.png";
import pokemon from "../../assets/Project/pokemon.png";
import tictactoe from "../../assets/Project/tictactoe.png";
import typingtest from "../../assets/Project/typingtest.png";

import Animations from "../../Utilities/Animations";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import "./Projects.css";

export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div className="projects fadeIn" id={props.id || ""}>
      <ScreenHeading
        title={"Projects"}
        subHeading={"Few of my  Applications"}
      />
      <section className="project-section " id={props.id || ""}>
        <div className="project-scroll">
          <div className="project">
            <div className="project-image">
              <img src={foodapp} alt="" className="project-img" />
            </div>
            <div className="project-text">
              <h3 className="project-title">Food App</h3>
              <ul className="project-tags">
                <li>React</li>
                <li>Redux</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="project-links">
              <a
                href="https://food-app-mou5.vercel.app/"
                target="_blank"
                rel="noopener"
              >
                Visit Site
              </a>
              <a
                href="https://github.com/Abhitachi/FOOD-APP.git"
                target="_blank"
                rel="noopener"
              >
                Source Code
              </a>
            </div>
          </div>
          <div className="project">
            <div className="project-image">
              <img src={tictactoe} alt="" className="project-img" />
            </div>
            <div className="project-text">
              <h3 className="project-title">TIC TAC TOE</h3>
              <ul className="project-tags">
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <div className="project-links">
              <a
                href="https://third-fish.surge.sh/"
                target="_blank"
                rel="noopener"
              >
                Visit Site
              </a>
              <a
                href="https://github.com/Abhitachi/tictactoe.git"
                target="_blank"
                rel="noopener"
              >
                Source Code
              </a>
            </div>
          </div>
          <div className="project">
            <div className="project-image">
              <img src={typingtest} alt="" className="project-img" />
            </div>
            <div className="project-text">
              <h3 className="project-title">Typing Test</h3>
              <ul className="project-tags">
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <div className="project-links">
              <a
                href="https://abhitachi.github.io/Typing-Test/"
                target="_blank"
                rel="noopener"
              >
                Visit Site
              </a>
              <a
                href="https://github.com/Abhitachi/Typing-Test.git"
                target="_blank"
                rel="noopener"
              >
                Source Code
              </a>
            </div>
          </div>
          <div className="project">
            <div className="project-image">
              <img src={pokemon} alt="" className="project-img" />
            </div>
            <div className="project-text">
              <h3 className="project-title">Poke Mon</h3>
              <ul className="project-tags">
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <div className="project-links">
              <a
                href="https://abhitachi.github.io/Poke_Mon/"
                target="_blank"
                rel="noopener"
              >
                Visit Site
              </a>
              <a
                href="https://github.com/Abhitachi/Poke_Mon.git"
                target="_blank"
                rel="noopener"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
