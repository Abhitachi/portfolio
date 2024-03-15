import React, { useState } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carasoulOffSetStyle, setCarasoulOffSetStyle] = useState({});

  const ResumeHeading = (props) => {
    <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet">
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <dov className="heading-date">
              {props.fromDate + "_" + props.toDate}
            </dov>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    </div>;
  };

  const resumeBullets = [
    { label: "Ëducation", logosrc: "education.svg" },
    { label: "Work History", logosrc: "work-history.svg" },
    { label: "Programming Skills", logosrc: "programming-skills.svg" },
    { label: "Projects", logosrc: "projects.svg" },
    { label: "Interests", logosrc: "interests.svg" },
  ];
  const programmingSkillDetails = [
    { skill: "JavaScript", ratingPercentage: 75 },
    { skill: "React JS", ratingPercentage: 78 },
    { skill: "Core Java", ratingPercentage: 85 },
    { skill: "Spring boot", ratingPercentage: 77 },
    { skill: "SQL", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 94 },
    { skill: "CSS", ratingPercentage: 81 },
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "2023" },
      description:
        "A personal Portfolio website to showcase all my details and projects at one place",
      subHeading: "Technologies used: React JS, Bootstrap",
    },
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "2023" },
      description:
        "A personal Portfolio website to showcase all my details and projects at one place",
      subHeading: "Technologies used: React JS, Bootstrap",
    },
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "2023" },
      description:
        "A personal Portfolio website to showcase all my details and projects at one place",
      subHeading: "Technologies used: React JS, Bootstrap",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Malnad College of Engineering,Hassan,Karnataka"}
        subHeading={"BACHELOR OF ENGINEERING"}
        fromDate={"2017"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"SRN Adarsh PU College,Banglore,Karnataka"}
        subHeading={"Pre-University"}
        fromDate={"2015"}
        toDate={"2017"}
      />
      <ResumeHeading
        heading={"Moraarji Desai Residential School"}
        subHeading={"High School"}
        fromDate={"2010"}
        toDate={"2015"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Cognizant Technology Solutions"}
        subHeading={"Programmer Anaylst Trainee"}
        fromDate={"2022"}
        toDate={"present"}
      />
      </div>,
      <div className="experience-description-text">
        <span className="resume-description-text"></span>
        <br />
        <span className="resume-description-text"></span>
        <br />
        <span className="resume-description-text"></span>
      </div>
      ,
      <div
        className="'resume-screen-container programming-skills-container"
        key="programming-skills"
      >
        {programmingSkillDetails.map((skill, index) => {
          <div className="skill-parent" key="index">
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-precentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage"
              ></div>
            </div>
          </div>;
        })}
      </div>,
      <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
      
  ];

  const fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div resume-container screen-container>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Bio Details"} />
      </div>
    </div>
  );
}
