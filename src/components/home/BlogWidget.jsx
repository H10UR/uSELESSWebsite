import React from "react";
import { motion } from "framer-motion";

const BlogWidget = ({ blogId, blogImg, title, handler, blog}) => {
  return (
    <div>
      <div></div>
      <main>
        <img src={blogImg}/>
        <p>{title}</p>
      </main>
    </div>
  );
};
//     ------Not------
/* link embedlenecek, unutma */
/* link embedlenecek, unutma */
/* link embedlenecek, unutma */
/* backendde id ile  sayfa  oluşturma ayarlanacak */
/* Unutursam */
/* sayfa oluşmuyor sadece uzantıdaki id'den bilgiyi çekiyor*/
export default BlogWidget;