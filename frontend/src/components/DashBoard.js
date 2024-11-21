import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
    render () {
        return (
            <div>
                
        <div className='d-flex'>
          <p className='flex-grow-1'>Cotizaciones</p>
          {/* <ul className="d-flex nav-bar nav gap-3">
            <li className="nav-item"><ion-icon name="newspaper-outline"></ion-icon></li>
            <li className="nav-item"><ion-icon name="notifications-outline"></ion-icon></li>
            <li className="nav-item"><ion-icon name="person-outline"></ion-icon></li>
          </ul> */}
        </div>
        <div>
          <div >
            <ul className='nav-bar nav gap-2'>
              <li className="nav-item"><Link>Mis Cotizaciones</Link></li>
              <li className="nav-item"><Link>Gestionar cotizaciones</Link></li>
              <li className="nav-item"><Link>Validar cotizacion</Link></li>
            </ul>
          </div>
          <div className='d-flex'>
            <p>Ordenar:</p>
            <div className='d-flex '>
              <div className='d-flex '>
                <ul className='nav-bar nav flex-grow-1 gap-2'>
                  <li >
                    <p>Todos los tipos</p>
                  </li>
                  <li >
                    <p>Todos los estados</p>

                  </li>
                  <li>
                    <p>Por nombre</p>
                  </li>
                  <li >
                    <p>Año: 2024</p>
                  </li>
                  <li>
                    <p>Mes: Enero</p>

                  </li>
                </ul>
              </div>

              <div className='d-flex'>
                <p>Buscar por :</p>
                <input type="text" name="" id="" />
              </div>
            </div>
          </div>
          <div >
            <section>
              <div >
                <p >ocultar el resumen</p>
              </div>
              <div>
                <p >Estado de pago</p>
                <p >Evolutivo</p>
              </div>
            </section>
            <div >
              <div >
                <div >
                  <div>
                    <p >Monto Dolares</p>
                    <p>00.00 $</p>
                  </div>
                  <div>
                    <p >Monto Soles</p>
                    <p>00.00 $</p>
                  </div>
                </div>
                <div>
                  <div>
                    <p >Base A</p>
                    <p>00.00 $</p>
                  </div>
                  <div>
                    <p >Total</p>
                    <p>00.00 $</p>
                  </div>
                </div>

                <div >
                  <div >
                    <div>
                      <p >Ventas</p>
                      <p>00.00 $</p>
                    </div>
                    <div>
                      <p >Compras</p>
                      <p>00.00 $</p>
                    </div>
                    <div>
                      <p >Pendiente</p>
                      <p>00.00 $</p>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div >
            <div>
              <p >Mostrando 1 - 20 resultados</p>
            </div>
            <div>
              <div><img src="" alt="" /></div>
              <div><img src="" alt="" /></div>
              <div><Link to={"/"}>Nueva Cotizacion</Link></div>
            </div>
          </div>
          <div>
            <table>
              <tr>
                <th></th>
                <th>Estado</th>
                <th></th>
                <th>Numero Cotizacion</th>
                <th>Empresa</th>
                <th>RUC</th>
                <th>Emision</th>
                <th>Tipo Agente</th>
                <th>Total</th>
                <th></th>
              </tr>
              <tr>
                <td><input type="checkbox" name="" id="" /></td>
                <td>
                  <p>
                    PAGADO
                  </p>
                </td>
                <td>

                </td>
                <td><p>T22400-07</p></td>
                <td><p>Ferreco</p></td>
                <td><p>20254819256</p></td>
                <td><p>07/05/2024 13:39</p></td>
                <td><p>TORQUE</p></td>
                <td><p>120</p></td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>


            </div>
        )
    }
}