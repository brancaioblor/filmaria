import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./routes";
import "./App.css";
import Header from "./components/Header";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'; // BIBLIOTECA DE ALERTS, IRA FECHAR NOSSO ALERT EM 3 SEGUNDOS ALI NO APP.

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <MainRoutes />
        <ToastContainer autoClose={3000}/>
      </Router>
    </div>
  );
}

export default App;
