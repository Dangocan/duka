import { Component } from 'react';

import './styles.css';

class TalentDetails extends Component {
  render() {
    return (
      <>
        <div className="talent-details">
          <div className="section-who">
            <p className="title-talent-details">Quem é a Raquel?</p>
            <p>
              Olá! Me chamo Raquel de Oliveira e tenho 18 anos, 
              me formei no ensino médio recentemente 
              e tive a oportunidade de conhcer e aprender sobre o mundo da tecnologia! 
              Estou muito animada com a área e espero trabalhar em breve :D
            </p>
          </div>

          <div className="section-how">
            <p className="title-talent-details">Como está a Raquel?</p>
            <p>
              Raquel iniciou um curso de 
              Excel no nível iniciante
            </p>
          </div>

          <div className="section-accomplishments">
            <p className="title-talent-details">Conquistas da Raquel</p>
            <div></div>
          </div>
        </div>
      </>
    );
  }
}

export default TalentDetails;