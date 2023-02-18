import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Gap, Input, TextArea, Upload, Linking } from "../../components";
import { postToAPI, setForm, setImgPreview, updateToAPI } from "../../config/Redux/Action";
import "./createBlog.scss";

const CreateBlog = () => {
  const { form, imgPreview } = useSelector((state) => state.createBlogReducer);
  const { title, body } = form;
  const navigate = useNavigate();
  const { id } = useParams();
  const [isUpdate, setIsUpdate] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      setIsUpdate(true);

      Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
        .then((result) => {
          const responseApi = result.data.data;
          dispatch(setForm("title", responseApi.title));
          dispatch(setForm("body", responseApi.body));
          dispatch(setForm("image", responseApi.image));
          dispatch(setImgPreview(`http://localhost:4000/images/${responseApi.image}`));
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const onSubmit = () => {
    if (id) {
      updateToAPI(form, id);
      dispatch(setForm("title", ""));
      dispatch(setForm("body", ""));
      dispatch(setForm("image", ""));
      dispatch(setImgPreview(null));
      navigate("/");
    } else {
      postToAPI(form);
      dispatch(setForm("title", ""));
      dispatch(setForm("body", ""));
      dispatch(setForm("image", ""));
      dispatch(setImgPreview(null));
      navigate("/");
    }
  };
  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm("image", file));
    dispatch(setImgPreview(URL.createObjectURL(file)));
  };

  return (
    <div className="blog-post">
      <Linking title={"Back To Home"} to="/" />
      <p className="title">{isUpdate ? "Update" : "Create New"} Blog Post</p>
      <Input label={"Post Title"} value={title} onChange={(e) => dispatch(setForm("title", e.target.value))} />
      <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
      <TextArea value={body} onChange={(e) => dispatch(setForm("body", e.target.value))} />
      <Gap height={20} />
      <div className="button-action">
        <Button title={isUpdate ? "Update" : "Save"} onClick={onSubmit} />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default CreateBlog;
