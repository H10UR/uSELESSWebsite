
import React from "react";
import { IoAperture } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <nav>
      <motion.div initial={{ y: "-100%" }} whileInView={{ y: 0 }}>
        <IoAperture />
      </motion.div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        {/* <Link to="/about">About</Link> */}
        {/* <Link to="/blog">Blog</Link> */}
        {/* <Link to="/team">Our Team</Link> */}
      </div>
    </nav>
  );
};

export default Header;
