import React, { useEffect, useState } from "react";
import api from '../../services/api';
import { Link } from "react-router-dom";
import './Home.css';


const Home = () => {
  const [filmes,setFilmes] = useState([]);
  
  useEffect(() => {
    const loadFilmes = async() => {
        //sujeitoprogramador.com + juntando a final da url com o get para pegar os filmes
        const response = await api.get('r-api/?api=filmes/');
        setFilmes(response.data);
    }

    loadFilmes();
}, []);

  return (
    <div className="container">
        <div className="lista-filmes">
            {filmes.map((filme) => {
                return (
                    <article key= {filme.id}>
                        <strong>{filme.nome}</strong>
                        <img src = {filme.foto} alt={filme.nome} />
                        <Link to={`/filme/${filme.id}`}>Acessar</Link>
                    </article>

                );
            })}
        </div>
    </div>
  );
}

export default Home;
