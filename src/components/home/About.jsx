
import React, { useState, useEffect } from "react";
import BlogPost from "../Blog/Blogpost";
import axios from 'axios';

const About = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // aynı sey, backend oluşturulunca /api/items güncellenececk 
    axios.get('/api/items')
      .then(response => {setItems(response.data); console.log(response.data);})
      .catch(error => console.error(error));
  }, []);

  const firstThreeItems = items.slice(0, 3);

  return (
    <section id="menu">
      <h1>About Us</h1>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptate, pariatur eaque reiciendis 
          <br />
          <br />
          eum optio iste possimus esse recusandae cupiditate reprehenderit fugiat numquam? Porro quaerat velit, vel eum eligendi ratione.
        </p>
        {firstThreeItems.map(item => (
          <BlogPost
            id = {item._id}
            blogId={item._id}
            blogImg={item.blogImg}
            title={item.name}
            blogContent = {item.blogContent}
        />
        ))}

      </div>
    </section>
  );
};
export default About;
