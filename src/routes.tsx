import React from 'react'
import {Routes, Route} from "react-router-dom";

import { LandingPage, PageAulas } from './pages';

const Router = () => {
  
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        {/* <Route path="/home" element={</>}/> */}
        {/* <Route path="/cursos" element={</>}/> */}
        <Route path="/aulas" element={<PageAulas/>}/>

        {/* <Route path="/dashboard" element={</>}/> */}
   </Routes>

  );
};

export default Router;
