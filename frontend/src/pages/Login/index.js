import React from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    history.push('/carros');
  } 

  return (
    <div>
      <p>Login</p>

      <form onSubmit = { handleLogin } >      
        <button type="submit">Entrar</button>
      </form>

    </div>
  );
}

export default Login;