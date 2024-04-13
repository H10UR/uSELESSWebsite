
import React from "react";
// import { motion } from "framer-motion";
// import axios from 'axios';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
//ileriki zamanlarda blog için altyapı
import card1 from "../../assets/aboutUs(1).JPG";
import card2 from "../../assets/aboutUs(2).JPG";
import card3 from "../../assets/aboutUs(3).JPG";
const About = () => {
  // const [items, setItems] = useState([]);
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

  // useEffect(() => {
  //   // aynı sey, backend oluşturulunca /api/items güncellenececk 
  //   axios.get('/api/items')
  //     .then(response => {setItems(response.data); console.log(response.data);})
  //     .catch(error => console.error(error));
  // }, []);

  return (
    <section id="about">
      <h1>About Us</h1>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptate, pariatur eaque reiciendis 
          <br />
          <br />
          eum optio iste possimus esse recusandae cupiditate reprehenderit fugiat numquam? Porro quaerat velit, vel eum eligendi ratione.
        </p>
        {/* // blogpost eklenmesi gerektiğinde  */}
        {/* {firstThreeItems.map(item => (
          <BlogPost
            id = {item._id}
            blogId={item._id}
            blogImg={item.blogImg}
            title={item.name}
            blogContent = {item.blogContent}
          />
        ))} */}
      </div>
      <div>
        <MDBCard>
          <MDBCardImage src={card1} alt='...' position='top' />
          <MDBCardBody>
            <MDBCardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>

        <MDBCard>
          <MDBCardImage src={card2} alt='...' position='top' />
          <MDBCardBody>
            <MDBCardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>

        <MDBCard>
          <MDBCardImage src={card3} alt='...' position='top' />
          <MDBCardBody>
            <MDBCardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </div>
    </section>
  );
};
export default About;
