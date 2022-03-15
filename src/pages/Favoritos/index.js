import React, { useState, useEffect } from "react";
import "./Favoritos.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Favoritos = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("filmes");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  const handleDelete = (id) => {
      let filtroFilmes = filmes.filter((item) => {
        return (item.id !== id)
      })

      setFilmes(filtroFilmes);
      localStorage.setItem('filmes', JSON.stringify(filtroFilmes));
      toast.success('Filme excluido com sucesso.');
  }

  return (
    <div className="meus-filmes">
      <h1>Meus Filmes</h1>

      {filmes.length === 0 && <span className="text">Você não possui nenhum filme salvo :(  </span> }

      <ul>
        {filmes.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.nome}</span>

              <div>
                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                <button onClick={ () => handleDelete(item.id)}>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Favoritos;
