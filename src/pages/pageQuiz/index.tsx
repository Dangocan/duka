import * as React from 'react'
import './style.css'

import { HeaderComponent } from '../../components'
import { Enviar, Nav, Perg1, Perg2 } from './pageComponents'

const PageQuiz:React.FC = () => {

    const [acertos, setAcertos] = React.useState([false, false])
    const [respostas, setRespostas] = React.useState([0, 0])
    const [atual, setAtual] = React.useState(0)
    
    const perguntas = [
    <Perg1 cb={(option)=>{
        let respostasNovas = [...respostas]
        respostasNovas[0] = option
        setRespostas([...respostasNovas])
        let acertosNovos = [...acertos]
        if(option===1)
            acertosNovos[0] = true
        else
            acertosNovos[0] = false
        setAcertos([...acertosNovos])
        }}
    selected={respostas[0]}
    />,
    <Perg2 cb={(option)=>{
        let respostasNovas = [...respostas]
        respostasNovas[1] = option
        setRespostas([...respostasNovas])
        let acertosNovos = [...acertos]
        if(option===2)
            acertosNovos[1] = true
        else
            acertosNovos[1] = false
        setAcertos([...acertosNovos])
        }}
    selected={respostas[1]}
    />
    ]
    return(<>

        <HeaderComponent
            leftIcon={5}
            rightIcon={5}
        />

        <section id="quizContent">

        {perguntas[atual]}

        
            {/* Botão de Navegação */}
            {/* Direita */}
            {(atual)===0 && (
                <Nav
                    direction={2}
                    cbD={()=>setAtual(atual+1)}
                />
            )}
            {/* Esquerda */}
            {(atual+1)===respostas.length && (<>
                <Nav
                    direction={0}
                    cbE={()=>setAtual(atual-1)}
                />
                <Enviar disabled={respostas.includes(0)} acertos={acertos.filter(acerto => acerto===true).length}/>
            </>)}
            {/* Direita e Esquerda */}
            {(atual)!==0 && (atual+1)!==respostas.length && (
                <Nav
                    direction={1}
                    cbD={()=>setAtual(atual+1)}
                    cbE={()=>setAtual(atual-1)}
                />
        )}
        </section>  
    </>)

}

export default PageQuiz;