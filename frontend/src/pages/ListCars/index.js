import React from 'react';
import { useHistory } from 'react-router-dom';

function ListCars() {
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    history.push('/');
  } 

  return (
    <div>
      <p>ListCars</p>

      <form onSubmit = { handleLogin } >      
        <button type="submit">Sair</button>
      </form>

    </div>
  );
}

export default ListCars;