import { motion } from "framer-motion/dist/framer-motion";
import React from "react";
import "./ScreenHeading.css";

export default function ScreenHeading(props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="heading-container"
    >
      <div className="screen-heading">
        <span>{props.title}</span>
      </div>
      {props.subHeading ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="screen-sub-heading"
        >
          <span>{props.subHeading}</span>
        </motion.div>
      ) : (
        <div></div>
      )}

      <div className="heading-seperator">
        <div className="seperator-line">
          <motion.div 
          initial={{opacity:0, y:50}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.5,delay:0.2}}
          className="seperator-blob">
            <div></div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// export default ScreenHeading;
