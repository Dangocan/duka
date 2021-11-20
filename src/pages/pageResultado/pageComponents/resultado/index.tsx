import * as React from 'react'
import './style.css'

import Conquista from './../../../../assets/icons/conquista-tutorial.svg'

const Resultado: React.FC = () =>{

    return (<>
    
        <section id="cardResultado">

            <img src={Conquista} alt=""/>
            <h2>Parabéns!</h2>
            <p>Você concluíu o tutorial Duka.</p>
            <span>Embora esse quiz tenha sido apenas um exemplo, receba essa conquista por se tornar um membro do time Duka!</span>

        </section>

    </>)

}

export default Resultado