import React from "react";
import "./register.scss";
import { RegisterBg } from "../../assets";
import { Button, Gap, Input, Linking } from "../../components";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} alt="register-bg" className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label={"Name"} placeholder="Full Name" />
        <Gap height={13} />
        <Input label={"E-mail"} placeholder="Your E-mail" />
        <Gap height={13} />
        <Input label={"Password"} placeholder="Your Password" />
        <Gap height={30} />
        <Button title={"Register Now"} onClick={() => navigate("/login")} />
        <Gap height={50} />
        <Linking title={"Back to Login"} to="/login" />
      </div>
    </div>
  );
};

export default Register;
