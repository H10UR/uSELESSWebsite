import React from "react";
import { motion } from "framer-motion";
import uber from "../../assets/uber.jpg";
const Founder = () => {
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
    <section className="founder">
      <h1>Our Beloved Sponsors</h1>
      <div>
        <a {...options}>
          <img src={uber} alt="Founder" height={200} width={200} />
        </a>
        <a>
          <img src={uber} alt="Founder" height={200} width={200} />
        </a>
        <a {...options}>
          <img src={uber} alt="Founder" height={200} width={200} />
        </a>
      </div>
    </section>
  );
};

export default Founder;
