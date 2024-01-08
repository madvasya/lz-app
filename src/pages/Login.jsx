import React from "react";
import styled, { css } from "styled-components";

import Userfront, { SignupForm } from "@userfront/toolkit/react";
Userfront.init("demo1234");

const LoginContainer = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 95%;
  }
`;

const Login = () => {
  return (
    <div>
      <SignupForm />
    </div>
  );
};

export default Login;