import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Gap, Linking } from "../../components";
import { Link, useParams } from "react-router-dom";

import "./detailBlog.scss";

const DetailBlog = () => {
  const [dataBlog, setDataBlog] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const response = await Axios.get(`http://localhost:4000/v1/blog/post/${id}`);
        const responseApi = response.data.data;
        setDataBlog(responseApi);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    loadData();
  }, []);
  const onDelete = async () => {
    try {
      await Axios.delete(`http://localhost:4000/v1/blog/post/${id}`);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  if (loading) return <h1>Loading...</h1>;
  if (dataBlog.author) {
    return (
      <div className="detail-blog-wrapper">
        <div className="update-wrapper">
          <div className="update-detail-wrapper">
            <Link className="edit-button" to={`/create-blog/${id}`}>
              Edit
            </Link>
            <Link className="delete-button" to={"/"} onClick={onDelete}>
              Delete
            </Link>
          </div>
        </div>
        <Gap height={30} />
        <img className="img-cover" src={`http://localhost:4000/images/${dataBlog.image}`} alt="thumb" />
        <p className="blog-title">{dataBlog.title}</p>
        <p className="blog-author">
          {dataBlog.author.name} - {dataBlog.createdAt}
        </p>
        <p className="blog-body">{dataBlog.body}</p>
        <Linking title={"Back To Home"} to={"/"} />
      </div>
    );
  }
  return <h1>Loading...</h1>;
};

export default DetailBlog;
