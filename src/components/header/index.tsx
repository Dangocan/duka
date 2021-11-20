import React from "react";

import './styles.css';

import logo from '../../assets/landingPage/Logo Duka.svg'

import curso from '../../assets/navOptions/Cursos.svg'
import perfil from '../../assets/navOptions/Perfil.svg'
import home from '../../assets/navOptions/Home.svg'
import voltar from '../../assets/navOptions/Voltar.svg'
import config from '../../assets/navOptions/Config.svg'


interface Props {
    rightIcon: number;
    leftIcon: number;
}

const  HeaderComponent:React.FC <Props> = ({rightIcon,leftIcon}) => {

    /*
        [ICON LIST]:

        0 - curso
        1 - perfil
        2 - home
        3 - voltar
        4 - config
    */


    let iconArray = [curso,perfil,home,voltar,config]
    
    return (
        <>
            <div className="header">
                <div className="left-nav">
                    <img className="nav-img" src={iconArray[leftIcon]} alt="" />
                </div>
                <div className="logo">
                    <img className="logo-nav-img" src={logo} alt="Logo Duka" />
                </div>
                <div className="right-nav">
                    <img className="nav-img" src={iconArray[rightIcon]} alt="" />
                </div>
            </div>
        </>
    );
};

export default HeaderComponent;