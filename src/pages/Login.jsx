import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Image = styled.img`
  width: 70%;
  height: auto;
`;

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

const ImageContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  flex: 1;
  display: flex;
  width: 90%;
  height: 90%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin-right: 30px;
  box-shadow: 2px 2px 10px #888888;

  @media (max-width: 768px) {
    margin: 0;
  }
`;
const Heading = styled.h2`
  font-size: 46px;
`;

const LoginForm = styled.form`
  width: 90%;
  margin: 30px 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
  margin: 10px 0;
`;
const Input = styled.input`
  width: 100%;
  margin-bottom: 8px;
  padding: 8px;
  margin-bottom: 10px;
  font-size: 16px;
  outiine: none;
`;
const LoginButton = styled.button`
  color: white;
  width: 60%;
  font-size: 16px;
  padding: 10px 15px;
  margin: 0 auto;
  margin-top: 30px;
  border: none;
  border-radius: 4px;
  background-color: #1575a7;
  cursor: pointer;
  &:hover {
    background-color: #1885c0;
  }
`;
const CheckBox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 8px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Anchor = styled.a`
  color: #f78719;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.noLine &&
    css`
      text-decoration: none;
    `}
`;

const Login = () => {
  return (
    <LoginContainer>
      <ImageContainer>
        <Image src="assets/vector.svg" alt="Login screen image" />
      </ImageContainer>
      <FormContainer>
        <Heading>Login</Heading>
        <LoginForm>
          <Label>Логин</Label>
          <Input type="text" placeholder="Enter Login ID" />
          <Label>Пароль</Label>
          <Input type="password" placeholder="Enter Password" />
          <Container>
            <Label>
              <CheckBox name="remember" value="remember" />
              Remember me
            </Label>
            <Anchor noLine>Изменить пароль</Anchor>
          </Container>
          <Label>
            <CheckBox name="role" value="admin" />
            Agree to <Anchor>Правилами Репбазы</Anchor>
          </Label>
          <LoginButton>Войти</LoginButton>
        </LoginForm>
        <Paragraph>
          Еще не зарегистрированы? <Anchor>Регистрация</Anchor>
        </Paragraph>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;