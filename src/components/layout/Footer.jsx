
import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div>
        <h2>uSELESScASE</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quis dolore facilis commodi culpa voluptatum assumenda, dolorum, autem odio sequi quod suscipit dignissimos in. Aperiam et doloremque consequatur vel at!</p>
        <br />
        <em>We give attention to genuine feedback.</em>
        <strong>All right received and shipped @adeptusmechanicus</strong>
      </div>
      <aside>
        <h4>Follow Us</h4>
        <a href="https://youtube.com">
          <AiFillYoutube />
        </a>
        <a href="https://instagram.com">
          <AiFillInstagram />
        </a>
      </aside>
    </footer>
  );
};
export default Footer;
