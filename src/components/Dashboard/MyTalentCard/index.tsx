import { useState } from 'react';
import { Heart, Mail, User, ChevronDown, ChevronUp } from 'react-feather';

import './styles.css';

import Raquel from './../assets/Raquel.png';

import { TalentDetails } from '../../../components';

const MyTalentCard: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="my-talent-card">
        <div className="left-wrapper">
          <img className="user-image" src={Raquel} alt="" />

          <div className="text-wrapper">
            <p className="title">Raquel de Oliveira dos Santos</p>
            <p className="text-area">
              Futuro talento em Front-end
            </p>
            <p className="text-age">
              19 anos, São Paulo - SP
            </p>
          </div>
        </div>

        <div className="right-wrapper">
          <div className="button-wrapper">
            <div className="button-icon">
              <Mail color="#FFFFFF" size={18} />
            </div>

            <div className="button-icon">
              <User color="#FFFFFF" size={18} />
            </div>

            <div className="button-icon">
              <Heart color="#FFFFFF" size={18} fill="#FFFFFF"/>
            </div>
          </div>

          <button className="button-see-more" onClick={() => setIsOpen(!isOpen)}>
            { isOpen ? 
              <>
                <p className="button-text">Veja menos sobre Raquel</p>
                <ChevronUp color="#FFFFFF" size={18} /> 
              </>
              :
              <>
                <p className="button-text">Veja mais sobre Raquel</p>
                <ChevronDown color="#FFFFFF" size={18} /> 
              </>
            }
          </button>
        </div>
      </div>

      { isOpen ? <TalentDetails/> : <></>}

    </>
  );
}

export default MyTalentCard;
