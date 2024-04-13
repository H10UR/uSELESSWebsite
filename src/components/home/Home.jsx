// Write all the code here
import React from "react";
import { motion } from "framer-motion";
import Sponsors from "./sponsors";
import About from "./About";
const Home = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <section className="home">
        <div>
          <motion.h1 {...options}>uSELESScASE</motion.h1>
          <motion.p 
            {...options}
            transition={{
              delay: 0.2,
            }}
          >
            Lorem Ipsum dolor sit amet
          </motion.p>
        </div>
        <motion.a
          href="#about"
          initial={{
            y: "-100%",
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
          }}
        >
          About  Us
        </motion.a>
      </section>
      <About />
      <Sponsors />
    </>
  );
};
export default Home;
