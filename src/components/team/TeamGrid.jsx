import React,  { useState, useEffect } from "react";
import BlogPost from "./TeamMember";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import axios from 'axios';

const TeamGrid = () => {

    const [blogItems, setBlogItems] = useState([]);

    useEffect(() => {
        axios.get('/api/items')
        //api/items olmayacak, backend hallolunca güncelle
        .then(response => setBlogItems(response.data))
        .catch(error => {
            console.error(error);
            setBlogItems([]);
        });
    }, []);


    return (
        <MDBContainer>
        <h1 className="mt-5">Our Team</h1>
            <MDBRow className="mt-4">

                {blogItems.map(item => (
                    <MDBCol size="4" key={item._id}>
                        <BlogPost
                            id = {item._id}
                            blogId={item._id}
                            blogImg={item.blogImg}
                            title={item.name}
                            blogContent = {item.blogContent}
                        />
                    </MDBCol>
                ))}
                
            </MDBRow>
        </MDBContainer>
  );
};

/* link embedlenecek, unutma */
/* link embedlenecek, unutma */
/* link embedlenecek, unutma */
/* link embedlenecek, unutma */

export default TeamGrid;