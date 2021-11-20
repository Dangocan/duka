import * as React from 'react'
import './style.css'
const QuizPage: React.FC = () => {

    return(<>
        <section
            id="quizPage"
        >
            <h4>
                No final de todo curso é
                <br/> 
                apresentado um quiz como este.
            </h4>
            <h3>
                Acerte acima de 60% para
                <br/>
                completar esse módulo
            </h3>
            <h5>
                Caso não consiga passar, você terá outra chance
                <br/>
                após revisar o conteúdo.
            </h5>


            <button>
                Iniciar Avaliação
            </button>
        </section>
    </>)
}

export default QuizPage;