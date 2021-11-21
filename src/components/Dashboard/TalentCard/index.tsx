import { Component } from 'react';
import { Heart, Mail, User } from 'react-feather';

import './styles.css';

import Raquel from './../assets/Raquel.png';
import Placeholder from './../assets/placeholderPerfil.png';

interface Props{
  name:string,
  perfil:string,
  CB:()=>void,
  style?:any
}

var TalentCard:React.FC<Props> = ({name,perfil,CB,style}) => {
    return (
      <>
        <div className="talent-card" style = {{...style}}>
          <div className="content-card-about">
            <div className="left-wrapper-about">
              <img className="talent-image" src={perfil} alt="" />

              <div className="text-wrapper-about">
                <p className="title-about">{name}</p>
                <p className="text-about">
                  {name} vem se esforçando muito e já completou nosso módulo avançado em programação!!!
                </p>
              </div>
            </div>

            <div className="adjust-align">
              <div className="button-wrapper">
                <div className="button-about">
                  <div className="button-icon-about">
                    <Mail color="#000000" size={16} />
                  </div>
                  <p className="button-text-about">
                    Entrar em
                    <br /> contato
                  </p>
                </div>

                <div className="button-about-center">
                  <div className="button-icon-about">
                    <User color="#000000" size={16} />
                  </div>
                  <p className="button-text-about">
                    Ver perfil
                  </p>
                </div>

                <button onClick = {CB} className="button-about">
                  <div className="button-icon-about">
                    <Heart color="#000000" size={16} />
                  </div>
                  <p className="button-text-about">
                    Acompanhar
                    <br /> talento
                  </p>
                </button>
              </div>
            </div>
          </div>
          <div className="bottom-line" />
        </div>
      </>
    );
}

export default TalentCard;