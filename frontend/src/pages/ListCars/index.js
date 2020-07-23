import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './styles.css';

function ListCars() {
  const history = useHistory();
  const token = localStorage.getItem('token');

  const [addPlate, setAddPlate] = useState([]);
  const [plates, setPlates] = useState([]);

  // carrega as placas, se o token é válido
  useEffect(() => {

    axios({
      method: 'get',
      url: 'http://localhost:8181/vehicle',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      setPlates(response.data.data);
    })
    // atualiza quando um nova placa é adicionada
  }, [token, plates]);


  async function handleAddPlate(e) {
    e.preventDefault();

    // verifica se a placa é válida
    const regexPlate = /^[a-zA-Z]{3}[0-9]{4}$/;

    if(regexPlate.test(addPlate)){
      // Se sim, então adiciona a placa
      try {
        await axios ({
          method: 'post',
          url: 'http://localhost:8181/vehicle',
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`
          }, 
          data: {
            "plate": addPlate
          }
        });
        alert('Placa ' + addPlate + ' adicionada');
      } 
      catch (err) {
        alert ('Erro, tente novamente')
      }

    } else {
      alert('Formato de placa inválido');
    }
  }

  // Deleta a placa correspondente
  async function handleDeletePlate(id, plate) {

    
    if (window.confirm("Tem certeza que deseja excluir a placa " + plate) === true) {
      try {
        await  axios ({
          method: 'delete',
          url: `http://localhost:8181/vehicle/${id}`,
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`
          } 
        });
        setPlates(plates.filter(plate => plate.id !== id));
  
      } catch (err) {
        alert('Erro ao deletar caso, tente novamente');
      }    
    } 


    



  }


  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }  



  return (
    <div className="cars-container">
      <header>
        <span>Menu</span>

        <span>Veículos</span>

        <button onClick={handleLogout} type="button" className="logout">
          Sair
        </button>
      </header>
      <main>
        
        <section className="addcar">
          <h4>Adicionar novo veículo</h4>
          <form onSubmit = { handleAddPlate } >
            <input 
              id = "addPlate"
              placeholder="Placa"
              value = {addPlate} 
              onChange = {e => setAddPlate(e.target.value) }
            />
            <button className="add">+</button>
          </form>
        </section>
        
        <section className="items">
        <h4>Veículos</h4>
      
        <ul>
          {plates.map(plate => (
            <li key={plate.id} >
              <span>{plate.plate}</span>
              <button onClick={() => handleDeletePlate(plate.id, plate.plate)} type="button">x</button>
          </li>
          ))}
        </ul>
        </section>
        
      </main>
    </div>
  );
}

export default ListCars;