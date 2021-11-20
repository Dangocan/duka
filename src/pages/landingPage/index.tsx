import React from "react";

import './styles.css'
import logo from '../../assets/landingPage/Logo Duka.svg'
import landingPageMainImg from '../../assets/landingPage/Imagem Início.svg'

const  LandingPage:React.FC = () => {
    return (
        <>
            <div className="main">
                <div className="logo">
                   
                        <img className = "logo-img" src={logo} alt="Logo da Duka" />
                        <h1>Potencializando nossos talentos</h1>
                        <img className = "art-img" src={landingPageMainImg} alt="Imagem ilustrativa de aprendizado" />

                </div>
                <div className="login">
                    <div className="login-wrapper">
                        <h3>Você é:</h3>
                        <a href="/perfil"><button className="login-button">Estudante</button></a>
                        <h3>ou</h3>
                        <button className="login-button">Empresa</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;