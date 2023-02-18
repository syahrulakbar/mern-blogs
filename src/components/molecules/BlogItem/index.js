import React from "react";
import "./blogItem.scss";
import { Link } from "react-router-dom";

const BlogItem = (props) => {
  const { image, title, name, date, body, idBlog } = props;

  return (
    <Link to={`/detail-blog/${idBlog}`} className="blog-item">
      <img className="image-thumb" src={image} alt="post" />
      <div className="content-detail">
        <p className="title">{title}</p>
        <p className="author">
          {name} - {date}
        </p>
        <p className="body">{body}</p>
      </div>
    </Link>
  );
};

export default BlogItem;
