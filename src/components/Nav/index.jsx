import React from 'react'
import {
  Link
} from "react-router-dom";
const Nav=()=>{
return(
   <nav className="navbar navbar-dark bg-dark">

<ul className="nav">
  <li className="nav-item">
   
    <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/cats">Gatos</Link>
    
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/dogs">Perros</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/faq">Preguntas frecuentes</Link>
  </li>
</ul>
</nav>
)
}
export default Nav