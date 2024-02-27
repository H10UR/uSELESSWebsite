import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/skj.jpg";
const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>
        <article>
          <h4>uSELESScASE</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quidem tempora sit quae laborum, placeat, fuga, molestias architecto adipisci hic quas est harum nemo? Nobis ducimus asperiores voluptatum dolores alias.
          </p>
          <p>
            Lorem ipsum dolor, sit amet totam non porro soluta expedita excepturi laborum repellat.
            <br />
            Click below to see our projects
          </p>
          <Link to="/menu">
            <RiFindReplaceLine />
          </Link>
        </article>
      </main>
    </section>
  );
};
export default About;
