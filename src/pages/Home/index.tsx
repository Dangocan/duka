import React from 'react';
import { useNavigate } from "react-router";
import { ArrowRight } from 'react-feather';

import './styles.css';

import WelcomeImage from './assets/WelcomeImage.svg';
import LogoDuka from '../../assets/LogoDuka.svg';

import { 
  HeaderComponent,
  FooterComponent
} from '../../components';

const Home: React.FC = () => {
  let navigate = useNavigate();
  return (
    <>
      <body>
        <HeaderComponent
          rightIcon = {1}
          leftIcon = {0}
          rightCb={()=>{navigate("/perfil")}}
          leftCb={()=>{navigate("/cursos")}}
        />
        
        <div id="body-content-center">
          <div className="body-max-width">
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
              <div className="last-course-image-wrapper">
                <img className="last-course-image" src={LogoDuka} alt="" />
              </div>
              <div className="top-last-course">
                <p className="title-top-last-course">Tutorial Duka </p>
                <p className="circle-top-last-course">●</p>
                <p className="text-top-last-course">Trilha Duka</p>
              </div>
              <div className="bottom-last-course">
                <p className="small-text-bottom-last-course">60% concluído</p>
                <p className="text-bottom-last-course">
                  Aprenda como que a nossa plataforma funciona e desenvolva todo o seu potencial com a gente!
                </p>
                <div className="button-wrapper-last-course">
                  <a href="/trilha/tutorial" className="a-underline">
                    <button className="button-last-course">
                      <p className="text-button-last-course">Continuar curso</p>
                      <ArrowRight color="#17C1D9" size={16}/>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <p className="title-section-home">
              Cursos que podem ser de seu interesse:
            </p>

            <div className="section-courses">
              <div className="section-flex-course">
                <div className="card-courses">
                  <img 
                    className="course-image" 
                    src="https://img.ibxk.com.br/2018/6/programas/12686714154729572.png" 
                    alt="" 
                  />
                  <p className="text-section-course">
                    Excel<br/> Básico
                  </p>
                </div>

                <div className="card-courses">
                  <img 
                    className="course-image" 
                    src="https://lsxconsulting.com/wp-content/uploads/2020/07/160.jpg" 
                    alt="" 
                  />
                  <p className="text-section-course">
                    Power BI<br/> Básico
                  </p>
                </div>

                <div className="card-courses third-course-card">
                  <img 
                    className="course-image" 
                    src="https://image.freepik.com/vetores-gratis/conceito-de-design-web-para-a-pagina-de-destino_23-2147777956.jpg" 
                    alt="" 
                  />
                  <p className="text-section-course">
                    Web<br/> Design I
                  </p>
                </div>

                <div className="card-courses fourth-course-card">
                  <img 
                    className="course-image" 
                    src="https://img.ibxk.com.br/2018/9/programas/12686305181004753.png"
                    alt="" 
                  />
                  <p className="text-section-course">
                    Word<br/> Básico
                  </p>
                </div>
              </div>
            </div>

            <div className="title-wrapper-section-trail">
              <p className="title-section-trail">
                Conheça outras trilhas
              </p>
              <a href="/cursos" className="a-underline">
                <u>Ver todas</u>
              </a>
            </div>

            <div className="section-flex-trail">
              <div className="card-trail">
                <img 
                  className="trail-image" 
                  src="https://img.ibxk.com.br/2018/6/programas/12686714154729572.png" 
                  alt="" 
                />
                <p className="text-section">
                  Excel
                </p>
                <p className="classes-hours-text">4 cursos ● 120 horas</p>
              </div>

              <div className="card-trail">
                <img 
                  className="trail-image" 
                  src="https://lsxconsulting.com/wp-content/uploads/2020/07/160.jpg"
                  alt="" 
                />
                <p className="text-section">
                  Power BI
                </p>
                <p className="classes-hours-text">3 cursos ● 90 horas</p>
              </div>

              <div className="card-trail third-trail-card">
                <img 
                  className="trail-image" 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" 
                  alt="" 
                />
                <p className="text-section">
                  JavaScript
                </p>
                <p className="classes-hours-text">8 cursos ● 280 horas</p>
              </div>
            </div>
          </div>
        </div>
        <FooterComponent/>
      </body>
    </>
  )
}

export default Home;