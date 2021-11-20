import React from 'react';
import { Command } from 'react-feather';
import { Search, X } from 'react-feather';

import './styles.css';

import Cubos from './assets/Cubos.svg';
import Abstract from './assets/Abstract.svg';
import LogoDuka from '../../assets/LogoDuka.svg';

import { TalentCard } from '../../components';
import { MyTalentCard } from '../../components';

const Dashboard: React.FC = () => {
  return (
    <>
      <body>
        <img className="abstract-image" src={Abstract} alt="" />

        <div className="sidebar">
          <img className="image-logo" src={LogoDuka} alt="" />

          <div className="card-company">
            <div className="center-wrapper-company">
              <img className="image-company" src={Cubos} alt="" />
              <p className="title-company">CUBOS</p>
            </div>

            <div className="wrapper-company">
              <p className="text-company">Meus talentos</p>
              <p className="number-company">10</p>
            </div>
          </div>
        </div>

        <div className="container">

          <div className="page-title-wrapper">
            <Command color="#045171" size={24} />
            <h1 className="page-title">Seu dashboard</h1>
          </div>

          <h2 className="section-title">Qual talento deseja conhecer hoje?</h2>

          <div className="talent-section">
            <div className="search-card">
              <div className="search-card-flex">
                <div>
                  <label>Busca por nome</label>
                  <div className="search-bar">
                    <input placeholder="Busque seu próximo talento"></input>
                    <div className='search-bar-icon'>
                      <Search color="#797979" size={12} />
                    </div>
                  </div>
                </div>

                <div>
                  <label>Estado</label>
                  <select name="languages" id="lang">
                    <option value="" disabled selected hidden>Selecione o estado</option>
                    <option value="javascript">JavaScript</option>
                    <option value="java">Java</option>
                  </select>
                </div>

                <div>
                  <label>Cidade</label>
                  <select name="languages" id="lang">
                    <option value="" disabled selected hidden>Selecione a cidade</option>
                    <option value="javascript">JavaScript</option>
                    <option value="java">Java</option>
                  </select>
                </div>
                <div>
                  <label>Especialidade</label>
                  <select name="languages" id="lang">
                    <option value="" disabled selected hidden>Selecione a especialidade</option>
                    <option value="javascript">JavaScript</option>
                    <option value="java">Java</option>
                  </select>
                </div>
              </div>

              <div className="search-card-flex">
                <button className="filter-icon filter-icon-first">
                  <X color="#FFFFFF" size={18} />
                </button>

                <button className="filter-icon">
                  <Search color="#FFFFFF" size={18} />
                </button>
              </div>
            </div>

            <div>
              <TalentCard />
              <TalentCard />
              <TalentCard />
            </div>

            <div className="pagination">
              <p className="pagination-text">Número de página</p>
              <div className="page-selected">
                <p className="page-number">1</p>
              </div>
            </div>
          </div>

          <h2 className="section-title">Acompanhe seus talentos</h2>

          <MyTalentCard />
          <MyTalentCard />
          <MyTalentCard />

          <div className="adjust-button">
            <button className="button-load-more">
              <p>Carregar mais talentos</p>
            </button>
          </div>
        </div>
      </body>
      {/* <div className="footer"></div> */}
    </>
  )
}

export default Dashboard;