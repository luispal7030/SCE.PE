import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

import Navigation from "./components/Navigation";
import NoteList from "./components/NoteList";
import CreateUser from "./components/CreateUser";
import CreateNote from "./components/CreateNote";
import Dashboard from "./components/DashBoard";
import RightSide from "./components/RightSide";
import LeftSide from "./components/LeftSide";
import Footer from './components/Footer'
import Compras from "./components/Compras";
import Ventas from "./components/Ventas";





function App() {
  return (
    <Router>
      <section class="layout">
        <div class="header">
          <Navigation />
        </div>
        <div class="leftSide">
          <LeftSide/>
        </div>
        <div class="body">
        <div className="container p-4">
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/compras" element={<Compras />} />
              <Route path="/ventas" element={<Ventas />} />

              <Route path="/notes" element={<NoteList/>}/>
              <Route path="/edit/:id" element={<CreateNote />} />
              <Route path="/create" element={<CreateNote />} />
              <Route path="/user" element={<CreateUser />} />
            </Routes>
          </div>
        </div>
        <div class="rightSide">
          <RightSide/>
        </div>
        <div class="footer">
          <Footer/>
        </div>
      </section>
    </Router>
  );
}

export default App;
