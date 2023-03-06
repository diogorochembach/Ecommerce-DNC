import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

const Login = () => {
  return (
    <section className="login">
      <Header />
      <form className="login__form">
        <h1>Acesse com seu login ou cadastre-se!</h1>
        <h2>você pode entrar com o seu CPF</h2>
        <div className="login__input-wrapper">
          <label htmlFor="name">Digite seu CPF:</label>
          <input
            type="number"
            placeholder="000.000.000-00"
            id="name"
            className="login__input-cpf"
          />
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="********" />
        </div>
        <button type="submit">
          <Link to={"/home"}>Entrar</Link>
        </button>
      </form>
    </section>
  );
};

export default Login;
