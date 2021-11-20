import React from "react";

import { FooterComponent, HeaderComponent} from '../../components';
import axios from 'axios'

import ConquistaTutorial from './../../assets/icons/conquista-tutorial.svg'

import './styles.css';
import profilePicture from '../../assets/profile/Imagem Perfil.svg'

import { ChartsComponent } from "./pageComponents";
import { useNavigate } from "react-router";



const  ProfilePage:React.FC  = () => {

    const navigate = useNavigate();
    const [tutorial, setTutorial] = React.useState(false)

    const initDados = () => {
        axios.get('https://duka-backend-undefined.herokuapp.com/getTutorial')
        .then((res)=>setTutorial(res.data))
        .catch((err)=>console.log(err))
    }
    const resetProfile = () => {
        axios.post('https://duka-backend-undefined.herokuapp.com/updateTutorial', {
            status: false,
        })
        .then(()=>setTutorial(false))
        .catch((err)=>console.log(err))
    }

    React.useEffect(()=>{
        initDados()
    })

    return (
        <>
           <HeaderComponent
                leftIcon = {2}
                rightIcon = {4}
                rightCb = {() => {
                    if(window.confirm("Deseja resetar esse protótipo ao seu estado original?"))
                        resetProfile()
                }}
                leftCb={()=>{navigate("/home")}}
           />
            <div className="main-profile-content">
                <div className="welcome-box">
                    <div className="img-wrapper"><img src={profilePicture} alt="Raquel" /></div>
                    <div className="text-wrapper">
                        <h1>Olá Raquel!</h1>
                        <p>Aqui está um resumo sobre seu perfil</p>
                    </div>
                </div>
                
                <div className="chart-component-wrapper">
                    <h2>Suas visitas</h2>
                    <ChartsComponent/>
                    <div className="achievments">
                        <h2>Suas conquistas</h2>
                        <div className="achiv-card">
                            {!tutorial&&
                            <h4>
                                Quando você conclui um curso, sua insígnea aparece aqui :D
                            </h4>
                            }
                            {tutorial&&<>
                                <img src={ConquistaTutorial} alt="Conquista - Tutorial" />
                                <p>Completou o Tutorial</p>
                                </>}
                        </div>

                    </div>
                    <div className="achievments">
                        <h2>Seu histórico</h2>
                        <div className="achiv-card">
                            <h4>Seus cursos concluídos se encontram nessa sessão, conclua um curso para que ele apareça aqui :)</h4>
                        </div>
                    </div>
                </div>
            </div>
            
           


           <FooterComponent/>
        </>
    );
};

export default ProfilePage;