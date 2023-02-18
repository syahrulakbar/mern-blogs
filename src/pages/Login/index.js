import React, { useEffect, useState } from "react";
import { LoginBg } from "../../assets";
import { Button, Gap, Input, Linking } from "../../components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [onSubmit, setOnSubmit] = useState({});

  const onRegister = () => {
    setOnSubmit({
      email,
      password,
    });
  };
  useEffect(() => {
    localStorage.setItem("myAccount", JSON.stringify(onSubmit));
  }, [onSubmit]);
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} alt="register-bg" className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input onChange={(e) => setEmail(e.target.value)} label={"E-mail"} placeholder="Your E-mail" />
        <Gap height={13} />
        <Input onChange={(e) => setPassword(e.target.value)} label={"Password"} placeholder="Your Password" />
        <Gap height={30} />
        <Button title={"Login"} onClick={() => onRegister()} />
        <Gap height={50} />
        <Linking title={"Not Have Account? Register Now"} to="/register" />
      </div>
    </div>
  );
};

export default Login;
