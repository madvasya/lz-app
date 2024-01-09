import {
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const handleLogin = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div>
        <label>Name</label>
        <input name="name" {...register('name')} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" {...register('email')} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" {...register('password')} />
      </div>
      <button>Submit</button>
    </form>
  );
};



function Login() {
  let navigate = useNavigate();
  let location = useLocation();
  const { setToken } = useAuth();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  let from = location.state?.from?.pathname || "/";

  /*function handleSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("username");
    //здесь будет запрос к API
    setToken(username);

    navigate(from, { replace: true });
  }

  return (
    <div>
      <p>Войдите в систему, чтобы просматривать страницу по адресу {from}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Логин: <input name="username" type="text" />
        </label>{" "}
        <label>
          Пароль: <input name="password" type="password" />
        </label>{" "}
        <button type="submit">Login</button>
      </form>
    </div>
  );*/
  let handleSubmit = async (e) => {
    e.preventDefault();
    axios.post("https://httpbin.org/post", {
      username: username,
      password: password
    })
    .then(function (response) {
      console.log(response.token);
      
    })
    .catch(function (error) {
      alert(error + "\nлогина не будет.");
    });

    setToken(username);

    navigate(from, { replace: true });
  };

  return (
    /*<div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          placeholder="Имя"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          placeholder="Почта"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Пароль"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Вход</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>*/
    <LoginForm/>
  );
}
export default Login;