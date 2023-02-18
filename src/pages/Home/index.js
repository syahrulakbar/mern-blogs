import React, { useEffect, useState } from "react";
import { BlogItem, Button, Gap } from "../../components";
import "./home.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDataBlogs } from "../../config/Redux/Action";

const Home = () => {
  const [counter, setCounter] = useState(1);
  const { dataBlogs, page } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setDataBlogs(counter));
  }, [dispatch, counter, dataBlogs]);

  const previousPage = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
  };
  const nextPage = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
  };
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button title="Create Blog" onClick={() => navigate("/create-blog")} />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        {dataBlogs.map((blog, id) => (
          <BlogItem key={id} title={blog.title} image={`http://localhost:4000/images/${blog.image}`} name={blog.author.name} date={blog.createdAt} body={blog.body} idBlog={blog._id} />
        ))}
      </div>
      <div className="pagination">
        <Button title={"Previous"} onClick={previousPage} />
        <Gap width={20} />
        <p className="total-page">
          {page.currentPage} - {page.totalPage}
        </p>
        <Button title={"Next"} onClick={nextPage} />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
