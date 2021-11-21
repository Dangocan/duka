import * as React from 'react'
import { Link } from 'react-router-dom';
import { FooterComponent, HeaderComponent } from '../../components';
import './style.css'
import Logo from './../../assets/logos/logo_redonda_duka.svg'
import { useNavigate } from 'react-router-dom'

const TrilhaTutorial: React.FC = (props:any) => {

    const navigate = useNavigate();

    return (<>
    
        <HeaderComponent
            leftIcon={2}
            rightIcon={1}
            rightCb={()=>{navigate("/perfil")}}
            leftCb={()=>{navigate("/home")}}
        />

        <section className="trilha">

            <div className="trilha-container">
                <h2>Bem Vindo a</h2>
                <h1>Trilha Tutorial</h1>

                <p>Cada trilha reune os cursos que tem um assunto em comum, isso facilita que você ache mais facilmente cursos que você tem interesse!</p>


                    
                    <Link to="/aulas" className="link-container">
                        <img src={Logo} alt=""/>
                        Ir ao tutorial
                    </Link>

                
            </div>

        </section>

        {/* <FooterComponent/> */}
    
    </>)
}

export default TrilhaTutorial;