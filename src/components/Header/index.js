import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
   <header>
       <Link className="logo" to="/"> Filmaria</Link>
       <Link className="favoritos" to="/favoritos"> Salvos</Link>
   </header>
  
  );
};

export default Header;
