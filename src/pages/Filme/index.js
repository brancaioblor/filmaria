import React, {useEffect,useState} from 'react'
import './Filme.css';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { toast } from 'react-toastify';

 const Filme = () => {
    const { id } = useParams();
    const navigate = useNavigate();
   

    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadFilme = async () => {
            const response = await api.get(`r-api/?api=filmes/${id}`);

            if(response.data.length === 0) { 
                //tentou acessar com um idd que n existe navego ele para home
                navigate('/');
                return;

            } 
            setFilme(response.data);
            setLoading(false);
        }
      
        loadFilme();

        return () => {
            console.log('componente desmontado');
        }

    }, [id,navigate]);

    const salvaFilme = () => {

        const minhaLista = localStorage.getItem('filmes');

        let filmesSalvos = JSON.parse(minhaLista) || [];

        //Se tiver algum filme salvo com o mesmo id precisa ignorar.
        const hasFilme = filmesSalvos.some( (filmeSalvo) => filmeSalvo.id === filme.id ) //SOME PERCORRE TODO ARRAY E VERIFICA SE EXISTE ALGUM COM O PARAMETRO Q A GENTE PASSAR.

        if (hasFilme) {
            toast.error('Você já possui esse filme salvo.');
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
        toast.success('Filme salvo com sucesso');

    }

   if(loading){
       return (
        <div className='filme-info'>
           <h1>Carregando seu filme...</h1>
        </div>
       );
   }

    return (
        <div className='filme-info'>
          <h1>{filme.nome}</h1>
          <img src={filme.foto} alt={filme.nome} />

          <h3 className='filme-sinopse'>Sinopse</h3><br/>
          <p className='sinopse'>{filme.sinopse}</p>

          <div className='botoes'>
              <button onClick={salvaFilme}>Salvar</button>
              <button>
                  <a target='blank' href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>
                      Trailer
                  </a>
              </button>
          </div>

        </div>
    )
}

export default Filme;
