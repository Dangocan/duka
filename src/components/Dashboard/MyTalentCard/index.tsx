import { useState } from 'react';
import { Heart, Mail, User, ChevronDown, ChevronUp } from 'react-feather';

import './styles.css';

import Raquel from './../assets/Raquel.png';

import { TalentDetails } from '../../../components';

interface Props{
  name:string
  completeName: string,
  talent: string,
  city:string
  description?:string,
  profile:string
  unfollow?:()=>void
}

const MyTalentCard: React.FC<Props> = ({name,completeName,talent,description,profile,city,unfollow}) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="my-talent-card">
        <div className="left-wrapper">
          <img className="user-image" src={profile} alt="" />

          <div className="text-wrapper">
            <p className="title">{completeName}</p>
            <p className="text-area">
              {talent}
            </p>
            <p className="text-age">
              {city}
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

            <div className="button-icon" onClick={unfollow}>
              <Heart color="#FFFFFF" size={18} fill="#FFFFFF"/>
            </div>
          </div>

          <button className="button-see-more" onClick={() => setIsOpen(!isOpen)}>
            { isOpen ? 
              <>
                <p className="button-text">Veja menos sobre {name}</p>
                <ChevronUp color="#FFFFFF" size={18} /> 
              </>
              :
              <>
                <p className="button-text">Veja mais sobre {name}</p>
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
