import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-primary"> 
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">
            NotesApp
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-white" to="/notes">Notes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/create">Create Note</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/user">User</Link>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn bg-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}
