import React from 'react'
import {Routes, Route} from "react-router-dom";

import { LandingPage, PageAulas, ProfilePage } from './pages';

const Router = () => {
  
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        {/* <Route path="/home" element={</>}/> */}
        {/* <Route path="/cursos" element={</>}/> */}
        <Route path="/aulas" element={<PageAulas/>}/>

        {/* <Route path="/dashboard" element={</>}/> */}
   </Routes>

  );
};

export default Router;
