import React from 'react'
import './Erro.css';
import { Link } from 'react-router-dom';

 const index = () => {
    return (
        <div className='container'>
            <h1>Página não existe</h1>
            <p>Volte para a página inicial:
                <Link to= "/">Home</Link>
                  
            </p>           
        </div>
    )
}

export default index;
