import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Filme from './pages/Filme';
import Favoritos from './pages/Favoritos';
import Erro from './pages/Erro';



const MainRoutes = () => {
    return(
        
      <Routes>
          <Route exact path="/" element={<Home />}  />
          <Route exact path="/filme/:id" element={<Filme />}  />
          <Route exact path="/favoritos" element={<Favoritos />}  />

          <Route  path="*" element={<Erro />}  />

      </Routes>
    )
  }

  export default MainRoutes;
  