import Axios from "axios";

export const setForm = (formType, formValue) => {
  return { type: "SET_FORM_DATA", formType, formValue };
};
export const setImgPreview = (payload) => {
  return { type: "SET_IMG_PREVIEW", payload };
};
export const postToAPI = (form) => {
  const data = new FormData();
  data.append("title", form.title);
  data.append("body", form.body);
  data.append("image", form.image);

  Axios.post("http://localhost:4000/v1/blog/post", data, {
    headers: {
      "Content-type": "multipart/form-data",
    },
  })
    .then((result) => {
      console.log("Create Blog Post Success", result);
    })
    .catch((err) => console.log(err));
};
export const updateToAPI = (form, id) => {
  const data = new FormData();
  data.append("title", form.title);
  data.append("body", form.body);
  data.append("image", form.image);

  Axios.put(`http://localhost:4000/v1/blog/post/${id}`, data, {
    headers: {
      "Content-type": "multipart/form-data",
    },
  })
    .then((result) => {
      console.log("Update Blog Post Success", result);
    })
    .catch((err) => console.log(err));
};
