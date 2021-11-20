import { Component } from 'react';
import { Heart, Mail, User } from 'react-feather';

import './styles.css';

import Raquel from './../assets/Raquel.png';

class TalentCard extends Component {
  render() {
    return (
      <>
        <div className="talent-card">
          <div className="content-card-about">
            <div className="left-wrapper-about">
              <img className="talent-image" src={Raquel} alt="" />

              <div className="text-wrapper-about">
                <p className="title-about">Conheça a Raquel!</p>
                <p className="text-about">
                  Raquel vem se esforçando muito e já completou nosso módulo avançado em programação!!!
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

                <div className="button-about">
                  <div className="button-icon-about">
                    <Heart color="#000000" size={16} />
                  </div>
                  <p className="button-text-about">
                    Acompanhar
                    <br /> talento
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-line" />
        </div>
      </>
    );
  }
}

export default TalentCard;