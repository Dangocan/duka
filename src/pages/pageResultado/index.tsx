import * as React from 'react'
// import { useParams } from 'react-router'
import { FooterComponent, HeaderComponent } from '../../components'
import { Titulo } from '../pageAulas/pageComponents'
import './style.css'
import axios from 'axios'

// import ImagemPositiva from './../../assets/icons/resultado-positivo.svg'

import { Resultado } from './pageComponents'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'


const ResultadoQuiz: React.FC = () => {

    const navigate = useNavigate();
    // const acertos = useParams().acertos

    const updateProfile = () => {
        axios.post('http://localhost:3333/updateTutorial', {
            status: true,
        })
        .catch((err)=>console.log(err))
    }
    React.useEffect(()=>{
        updateProfile()
    })

    return (<>
        <HeaderComponent
            rightIcon={0}
            leftIcon={2}    
            leftCb={()=>{navigate("/home")}}
            rightCb={()=>{navigate("/cursos")}}    
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