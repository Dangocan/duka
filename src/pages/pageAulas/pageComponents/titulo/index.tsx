import * as React from 'react'
import './style.css'

import Logo from './../../../../assets/logos/logo_redonda_duka.svg'

interface Props{
    subtitulo: string,
}

const Titulo: React.FC <Props> = ({subtitulo}) => {
    return (<>
        <section id="titulo">
            <img src={Logo} alt="Logo"/>
            <div>
                <h2>Tutorial Duka</h2>
                <h3>{subtitulo}</h3>
            </div>
        </section>
        
    </>)
}

export default Titulo;