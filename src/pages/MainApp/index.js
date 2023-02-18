import React from "react";
import { Routes, Route } from "react-router-dom";
import { Footer, Header } from "../../components";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";
import Home from "../Home";
import PageNotFound from "../PageNotFound";
import "./mainapp.scss";

const MainApp = () => {
  return (
    <>
      <div className="main-app-wrapper">
        <Header />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-blog/:id?" element={<CreateBlog />} />
            <Route path="/detail-blog/:id" element={<DetailBlog />} />
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default MainApp;
