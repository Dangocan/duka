import React from 'react'
import {Routes, Route} from "react-router-dom";

import { LandingPage, PageAulas, PageQuiz, ResultadoQuiz, ProfilePage, TrilhaTutorial, Dashboard, Home } from './pages';

const Router = () => {
  
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/perfil" element={<ProfilePage/>}/>
        <Route path="/home" element={<Home/>}/> 
        {/* <Route path="/cursos" element={</>}/> */}
        <Route path="/trilha/tutorial" element={<TrilhaTutorial/>}/>
        <Route path="/aulas" element={<PageAulas/>}/>
        <Route path="/quiz" element={<PageQuiz/>}/>
        <Route path="/quiz/resultado/:acertos" element={<ResultadoQuiz/>}/>

        <Route path="/dashboard" element={<Dashboard/>}/>
   </Routes>

  );
};

export default Router;
