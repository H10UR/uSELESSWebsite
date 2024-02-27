import React from "react";

const BlogPost = ({ blogId, blogImg, title, handler,blogContent, blog}) => {
  return (
    <div className="menuBlock">
        <main>
          <img src={blogImg} alt={blogId} />
          <h3>{title}</h3>
          <p>{blogContent}</p>
          <button onClick={() => handler(blogId)}>Read all</button>
        </main>
    </div>
  );
};
/* link embedlenecek, unutma */
/* Blog kısmından kopyaladım burayı, daha WIP*/

export default BlogPost;