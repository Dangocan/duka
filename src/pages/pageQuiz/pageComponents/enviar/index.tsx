import * as React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

interface Props{
    disabled: boolean
    acertos: number
}

const Enviar:React.FC <Props> = ({disabled, acertos}) => {

    console.log(disabled)
    return (<>
        <section id="enviarContainer">
            {disabled&&
            <Link 
                id="enviarQuiz"
                to="/quiz/resultado"
                className="incompleto"
                onClick={ (e) => e.preventDefault() }
            >
                <p>Enviar
                </p>
            </Link>
            }{!disabled&&
                <Link 
                id="enviarQuiz"
                to={`/quiz/resultado/${acertos}/`}
                className="completo"
            >
                <p>Enviar
                </p>
            </Link>}
        </section>
    
    </>)
}

export default Enviar;