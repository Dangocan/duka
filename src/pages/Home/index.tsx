import React from 'react';
import { ArrowRight } from 'react-feather';

import './styles.css';

import WelcomeImage from './assets/WelcomeImage.svg'

const Home: React.FC = () => {
  return (
    <>
      <body>
        <div className="header"></div>
        
        <div className="card-welcome">
          <div>
            <p className="title-welcome">
              Boa noite Raquel!
            </p>
            <p className="text-welcome">
              Seja bem vinda de volta para mais um dia de estudos :)
            </p>
          </div>
          <div className="wrapper-image-welcome">
            <img className="image-welcome" src={WelcomeImage} alt="" />
          </div>
        </div>

        <p className="text-continue">Continue de onde parou</p>

        <div className="card-last-course">
          <div className="top-last-course">
            <p className="title-top-last-course">Excel Básico </p>
            <p className="circle-top-last-course">●</p>
            <p className="text-top-last-course">Trilha Excel</p>
          </div>
          <div className="bottom-last-course">
            <p className="small-text-bottom-last-course">60% concluído</p>
            <p className="text-bottom-last-course">
              Aprenda os princípios básicos de Excel, como a criação de planilhas,
              utilização de fórmulas e gráficos.
            </p>
            <button className="button-last-course">
              <p className="text-button-last-course">Continuar curso</p>
              <ArrowRight color="#55D340" size={14}/>
            </button>
          </div>
        </div>

        <p className="title-section-courses">
          Cursos que podem ser de seu interesse:
        </p>

        <div className="section-courses">
          <div className="card-courses">
            <p className="text-section">
              Excel
              <br/> Intermediário
            </p>
          </div>
        </div>

        <div className="title-wrapper-section-trail">
          <p className="title-section-trail">
            Conheça outras trilhas
          </p>
          <a href="#">
            <u>Ver todas</u>
          </a>
        </div>

        <div className="section-trail">
          <div className="card-trail">
            <p className="text-section">Word</p>
          </div>
        </div>
      </body>
    </>
  )
}

export default Home;