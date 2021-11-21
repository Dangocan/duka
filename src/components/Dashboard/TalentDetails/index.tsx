import { Component } from 'react';

import './styles.css';

interface Props{
  name:string,
  completeName:string
}

const TalentDetails:React.FC<Props> = ({name,completeName}) => {
    return (
      <>
        <div className="talent-details">
          <div className="section-who">
            <p className="title-talent-details">Quem é {name}?</p>
            <p>
              Olá! Me chamo {completeName} e tenho 18 anos, 
              me formei no ensino médio recentemente 
              e tive a oportunidade de conhcer e aprender sobre o mundo da tecnologia! 
            </p>
          </div>

          <div className="section-how">
            <p className="title-talent-details">Como está {name}?</p>
            <p>
            {name} iniciou um curso de 
              Excel no nível iniciante
            </p>
          </div>

          <div className="section-accomplishments">
            <p className="title-talent-details">Conquistas mais recentes</p>
            <div>
              <p>As conquistas mais recentes de {name} irão aparecer aqui, fique ligado no progresso desse Talento! :)</p>
            </div>
          </div>
        </div>
      </>
    );
}

export default TalentDetails;