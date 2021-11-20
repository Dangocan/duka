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
    rightCb?: ()=>void
    leftCb?: ()=>void
}

const  HeaderComponent:React.FC <Props> = ({rightIcon,leftIcon, rightCb, leftCb}) => {

    /*
        [ICON LIST]:

        0 - home
        1 - perfil
        2 - curso
        3 - voltar
        4 - config
        5 - undefined
    */


    let iconArray = [curso,perfil,home,voltar,config,undefined]
    
    return (
        <>
            <div className="header">
                <section>
                    <div 
                    className="left-nav"
                    onClick={leftCb}
                    >
                        <img className="nav-img" src={iconArray[leftIcon]} alt="" />
                    </div>
                    <div className="logo">
                        <img className="logo-nav-img" src={logo} alt="Logo Duka" />
                    </div>
                    <div 
                    className="right-nav"
                    onClick={rightCb}
                    >
                        <img className="nav-img" src={iconArray[rightIcon]} alt="" />
                    </div>
                </section>
            </div>
        </>
    );
};

export default HeaderComponent;