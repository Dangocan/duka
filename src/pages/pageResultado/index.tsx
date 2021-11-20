import * as React from 'react'
// import { useParams } from 'react-router'
import { FooterComponent, HeaderComponent } from '../../components'
import { Titulo } from '../pageAulas/pageComponents'
import './style.css'

// import ImagemPositiva from './../../assets/icons/resultado-positivo.svg'

import { Resultado } from './pageComponents'
import { Link } from 'react-router-dom'


const ResultadoQuiz: React.FC = () => {

    // const acertos = useParams().acertos

    return (<>
        <HeaderComponent
            rightIcon={0}
            leftIcon={2}        
        />
        <section id="resultadoQuiz">
            <Titulo subtitulo="Quiz"/>
            <span>Resultado: </span>
            <Resultado/>
            {/* <img id="resultadoPositivo" src={ImagemPositiva} alt=""/> */}
            <div>
                <Link className="retornaInicio" to="/home">
                    Retornar ao início
                </Link>
            </div>
        </section>
        
        <FooterComponent/>

    </>)
}

export default ResultadoQuiz;