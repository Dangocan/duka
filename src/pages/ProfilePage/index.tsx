import React from "react";

import { FooterComponent, HeaderComponent} from '../../components';


import './styles.css';
import profilePicture from '../../assets/profile/Imagem Perfil.svg'

import { ChartsComponent } from "./pageComponents";



const  ProfilePage:React.FC  = () => {
    return (
        <>
           <HeaderComponent
                leftIcon = {2}
                rightIcon = {4}
                rightCb = {() => {}}
                leftCb = {() => {}}
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
                            <h4>Quando você conclui um curso, sua insígnea aparece aqui :D</h4>
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