import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LeftSide extends Component {
  render() {
    const toggleDivClass = (className) => {
      const element = document.querySelector(`.${className}`);
      if (element) {
        element.classList.toggle('active');
      }
    };
    return (
      <div className="container-fluid border border-start-0  border-secondary-subtle">
        
        <section
          className="pad-1"
          onClick={() => toggleDivClass("vista")}
        >
          <div className="">
            <p>Luis Palomino</p>
            <p>Agente</p>
          </div>
        </section>

        <section >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link">Vista Cotizaciones</Link>
            </li>
            <li className="nav-item">
              <Link >Analitica</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-item">Informes contables</Link>
            </li>
            <li>
              <Link className="nav-item">Doc. Comerciales</Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <p className="">Facturacion</p>
            <li>
              <Link className="nav-item">Ingresos</Link>
            </li>
            <li>
              <Link className="nav-item">Buscador de Ingresos</Link>
            </li>
            <li>
              <Link className="nav-item">Compras</Link>
            </li>
            <li>
              <Link className="">Buscador de Compras</Link>
            </li>
            <li>
              <Link className="">Otros</Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <p className="">Administracion</p>
            <li>
              <Link className="nav-item">Mensajes</Link>
            </li>
            <li>
              <Link className="nav-item">Usuarios</Link>
            </li>
            <li>
              <Link className="nav-item" to={"/archivos"}>Archivos</Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li>
              <Link className="nav-item">Centro de ayuda</Link>
            </li>
            <li>
              <Link className="nav-item">Configuracion</Link>
            </li>
          </ul>
        </section>

        <section className="navbar-nav">
          <div className="">
            <div>
              <p>Torque</p>
              <p className="">Empresa</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
