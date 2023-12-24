import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const FormContainer = styled.div`
  flex: 1;
  display: flex;
  width: 90%;
  height: 90%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin-left: 2rem;

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
  background-color: #007dfc;
  cursor: pointer;
  &:hover {
    background-color: #007dfc;
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
  color: #007dfc;
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
      <FormContainer>
        <Heading>Вход</Heading>
        <LoginForm>
          <Label>Логин</Label>
          <Input type="text" placeholder="Логин" />
          <Label>Пароль</Label>
          <Input type="password" placeholder="Пароль" />
          <Container>
            <Label>
              <CheckBox name="remember" value="remember" />
              Запомнить меня
            </Label>
            <Anchor noLine>Изменить пароль</Anchor>
          </Container>
          <Label>
            <CheckBox name="role" value="admin" />
            Согласен с <Anchor>Правилами Репбазы</Anchor>
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