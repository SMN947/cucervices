import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import * as React from "react";
import Register from "../src/pages/Register";
import Cliente from "../src/pages/Cliente";
import Services from "../src/pages/Services"
import Ventas from "../src/pages/Ventas"
import Item from "./modulos/Item";
import Item2 from "./modulos/Item2";
import Verificador from "./modulos/Verificador";
import Publicar from "./pages/Publicar";
//import Pageinvalid from "../src/pages/Pageinvalid";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/reg" element={<Register />} />
          <Route exact path="/home-ventas" element={<Cliente/>}/>          
          <Route exact path="/home-ventas/producto/:id" element={<Item/>}/>
          <Route exact path="/home-ser/servicios/:id" element={<Item2/>}/>
          <Route exact path="/home-ser" element={<Services/>}/>
          <Route exact path="/cliente" element={<Ventas/>}/>          
          <Route exact path="/cliente/verificado" element={<Verificador/>}/>
          <Route exact path="/cliente/crear" element={<Publicar/>}/>
          <Route exact path="*" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
