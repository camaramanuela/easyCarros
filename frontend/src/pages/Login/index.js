import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import logoImg from '../../assets/logo.png';
import './styles.css';

function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const history = useHistory();


  function handleLogin(e) {
    e.preventDefault();

    (!email || !password ) ? alert('Preencha todos os campos') : verificaCredenciais();
  } 

  async function verificaCredenciais() {
     await axios({
        method: 'post',
        url: 'http://localhost:8181/auth',
        headers: {
          'content-type': 'application/json'
        }, 
        data: {
          "email": email, 
          "password": password
        }
      })
      .then(function(response) {
        localStorage.setItem('token', response.data.data.token);
        history.push('/carros');
      })
      .catch(function() {
        alert("Login inválido, tente novamente")
      });
  }
  

  return (
    <div className="login-container">
    <section className="form">

        <form onSubmit = { handleLogin } >
        
          <img src={logoImg} alt="Easy Carros"/>

          <input 
            placeholder = "E-mail" 
            type = "email"
            value = {email} 
            onChange = {e => setEmail(e.target.value) }
          />

          <input 
            placeholder = "Senha" 
            type = "password"
            value = {password}
            onChange = {e => setPassword(e.target.value) }
          />

          <button className="button" type="submit">Entrar</button>

        </form>

    </section>
  </div>
  );
}

export default Login;