import { motion } from "framer-motion/dist/framer-motion";
import gsap from "gsap";
import React, { useEffect } from "react";

const PreloadingPage = () => {
  useEffect(() => {
    gsap.to(".red", {
      opacity: 0.2,
      delay: 0.2,
      duration: 0.5,
    });
    gsap.to(".orange", {
      opacity: 0.2,
      delay: 0.4,
      duration: 0.5,
    });
    gsap.to(".yellow", {
      opacity: 0.2,
      delay: 0.6,
      duration: 0.5,
    });
    gsap.to(".green", {
      opacity: 0.2,
      delay: 0.8,
      duration: 0.5,
    });
    gsap.to(".blue", {
      opacity: 0.2,
      delay: 1,
      duration: 0.5,
    });

    gsap.to(".indigo", {
      opacity: 0.2,
      delay: 1.2,
      duration: 0.5,
    });

    gsap.to(".violet", {
      opacity: 0.2,
      delay: 1.4,
      duration: 0.5,
    });

    gsap.to(".violet", {
      opacity: 1,
      delay: 1.6,
      duration: 0.5,
    });

    gsap.to(".indigo", {
      opacity: 1,
      delay: 1.8,
      duration: 0.5,
    });

    gsap.to(".blue", {
      opacity: 1,
      delay: 2,
      duration: 0.5,
    });

    gsap.to(".green", {
      opacity: 1,
      delay: 2.2,
      duration: 0.5,
    });

    gsap.to(".yellow", {
      opacity: 1,
      delay: 2.4,
      duration: 0.5,
    });

    gsap.to(".orange", {
      opacity: 1,
      delay: 2.6,
      duration: 0.5,
    });

    gsap.to(".red", {
      opacity: 1,
      delay: 2.8,
      duration: 0.5,
    });
  });

  return (
    <div className="preloader">
      <div className="preloading-container">
        <div className="loader">
          <motion.span
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="firstWord mr-2 "
          >
            Code
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.5 }}
            className="secondWord mr-1"
          >
            is
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2 }}
            className="thirdWord mr-2"
          >
            {" "}
            Poetry
          </motion.span>
        </div>
        <div className="loading-text">
          {/* <img src={preloader} alt="" /> */}

          <div className="box red"></div>
          <div className="box orange"></div>
          <div className="box yellow"></div>
          <div className="box green"></div>
          <div className="box blue"></div>
          <div className="box indigo"></div>
          <div className="box violet"></div>
        </div>
      </div>
    </div>
  );
};

export default PreloadingPage;
