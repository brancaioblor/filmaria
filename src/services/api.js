import axios from "axios"; //AXIOS PARA FAZER REQUISIÇÕES


//BASE URL ->  https://sujeitoprogramador.com/
// r-api/?api=filmes/ (TODOS OS FILMES)



const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com'
})

export default api;