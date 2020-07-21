import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


import logoImg from '../../assets/logo.png';
import './styles.css';

function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    history.push('/carros');
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