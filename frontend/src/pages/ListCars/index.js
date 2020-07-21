import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function ListCars() {
  return (
    <div className="cars-container">
      <header>
        <span>Menu</span>

        <span>Veículos</span>

        <Link type="button" to="/" className="logout">
          Sair
        </Link>
      </header>
      <main>
        
        <section className="addcar">
          <h4>Adicionar novo veículo</h4>
          <form>
            <input placeholder="Placa" />
            <button className="add">+</button>
          </form>
        </section>
        
        <section className="items">
        <h4>Veículos</h4>
          <ul>
            <li>
              <span>AKH9182</span>
              <button>x</button>
            </li>
            <li>
              <span>AKH9182</span>
              <button>x</button>
            </li>
            <li>
              <span>AKH9182</span>
              <button>x</button>
            </li>
            <li>
              <span>AKH9182</span>
              <button>x</button>
            </li>
            <li>
              <span>AKH9182</span>
              <button>x</button>
            </li>
            <li>
              <span>AKH9182</span>
              <button>x</button>
            </li>
            <li>
              <span>AKH9182</span>
              <button>x</button>
            </li>
            <li>
              <span>AKH9182</span>
              <button>x</button>
            </li>
            <li>
              <span>AKH9182</span>
              <button>x</button>
            </li>
            <li>
              <span>AKH9182</span>
              <button>x</button>
            </li>
            <li>
              <span>AKH9182</span>
              <button>x</button>
            </li>
            <li>
              <span>AKH9182</span>
              <button>x</button>
            </li>
          </ul>
        </section>
        
      </main>
    </div>
  );
}

export default ListCars;