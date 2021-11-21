import * as React from 'react'
import { useNavigate } from 'react-router'
import { HeaderComponent, FooterComponent } from '../../components'
import { ArrowRight } from 'react-feather';
import LogoDuka from '../../assets/LogoDuka.svg';
import './style.css'
import axios from 'axios';

const PageCursos: React.FC = () => {
    const navigator = useNavigate();
    const [tutorial, setTutorial] = React.useState(false)

    const initDados = () => {
        axios.get('https://duka-backend-undefined.herokuapp.com/getTutorial')
        .then((res)=>setTutorial(res.data))
        .catch((err)=>console.log(err))
    }

    React.useEffect(()=>{
        initDados()
    })
    return (<>
    
    <HeaderComponent
        rightIcon={1}
        rightCb={()=>navigator("/perfil")}
        leftIcon={2}
        leftCb={()=>navigator("/home")}
    />
    <section className="listaCursos">
        <h2>Cursos Atuais</h2>
        {!tutorial&&(
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
            <p className="small-text-bottom-last-course">0% concluído</p>
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
        )}
        {tutorial&&(
            <h3> Você não está cadastrado em nenhum curso no momento.</h3>
        )}
        <h2>Mais Cursos</h2>
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
        
    </section>
    {/* <FooterComponent/> */}

    </>)
}

export default PageCursos