import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import "./content/leftside.css"

import Navigation from "./components/Navigation";
// import NoteList from "./components/NoteList";
// import CreateUser from "./components/CreateUser";
// import CreateNote from "./components/CreateNote";
import Dashboard from "./components/DashBoard";
// import RightSide from "./components/RightSide";
import LeftSide from "./components/LeftSide";
// import Footer from './components/Footer'
// import Compras from "./components/Compras";
// import Ventas from "./components/Ventas";
// import XmlFileDrop from "./components/Xmlfiledrop";
// import Documents from "./components/Documents"
import Cotizador from "./components/cotizador";



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
              <Route path="/cotizador" element={<Cotizador/>} />
            </Routes>
          </div>
        </div>
        {/* <div class="rightSide">
          <RightSide/>
        </div> */}
        {/* <div class="footer">
          <Footer/>
        </div> */}

      </section>
    </Router>
  );
}

export default App;
