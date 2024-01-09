import {
  useNavigate,
  useLocation,
  NavLink,
} from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { FormButton, FormContainer, FormFieldWrapper } from "../styles/Form.styled";

function Login() {
  let navigate = useNavigate();
  let location = useLocation();
  const { register, handleSubmit } = useForm();
  const { setToken } = useAuth();

  let from = location.state?.from?.pathname || "/";

  let handleLogin = async(data) => {
    //e.preventDefault();
    axios.post("/api/login", {
      username: data.username,
      password: data.password
    })
      .then(function (response) {
        console.log(response.data.token);
        setToken(response.data.token);
        navigate(from, { replace: true });
      })
      .catch(function (error) {
        if (error.response) {
          alert(error.response.data);
        }
      });
  };

  return (
    <FormContainer onSubmit={handleSubmit(handleLogin)}>
      <FormFieldWrapper>
        <label>Логин</label>
        <input name="username" autoComplete="username" {...register('username')} />
      </FormFieldWrapper>
      <FormFieldWrapper>
        <label>Пароль</label>
        <input type="password" name="password" autoComplete="current-password" {...register('password')} />
      </FormFieldWrapper>
      <FormButton>Войти</FormButton>
      <FormFieldWrapper>Еще не зарегистрированы?</FormFieldWrapper>
      <NavLink to="/register">Регистрация</NavLink>
    </FormContainer>
    
  );
}
export default Login;