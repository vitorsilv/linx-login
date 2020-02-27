import React from 'react';
import '../../global.css';
import './styles.css';

import Logo from "../../assets/logo.png";

import LoginForm from "../../components/Form";

import handler from "../../services/payload";

const LoginPage  = () => (
      <div id='app' onLoad={handler}>
        <img src={Logo} alt="logo-linx" className="logo-linx"/>
        <h1 className="login-label">Login</h1>
        <LoginForm/>
       <footer className="container"><p className="rodape">© Linx - Todos os direitos reservados</p></footer> 
      </div>
  );

export default LoginPage;
