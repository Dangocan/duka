import React, { useEffect, useState } from 'react';
import { Command } from 'react-feather';
import { Search, X } from 'react-feather';

import './styles.css';

import Cubos from './assets/Cubos.svg';
import Abstract from './assets/Abstract.svg';
import LogoDuka from '../../assets/LogoDuka.svg';

import { FooterComponent, TalentCard } from '../../components';
import { MyTalentCard } from '../../components';
import axios, { AxiosResponse } from 'axios';

type myArr = [{
  name:string,
  link:string
}]

const Dashboard: React.FC = () => {

  let [search,setSearch] = useState(false)
  const [followTalent, setFollowTalent] = useState<string[]>([""]);
  let [name,setName] = useState('');
  const [hasInit, setHasInit] = useState(false)
  const [nameArr,setNameArr]= useState<{name: string, link: string}[]>()

  useEffect(() => {
    let nameArrayConst =  [
      {name:'Raquel',link:'https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?k=20&m=1291208214&s=612x612&w=0&h=WbHbwklzP81iAWV0dPlQWuBLxnbqJFk81a9OZG6qvSM='},
      {name:'Luanda',link:'https://avatars.githubusercontent.com/u/66751357?v=4'},
      {name:'Calebe',link:'https://avatars.githubusercontent.com/u/66683288?v=4'},
      {name:'Thiago',link:'https://avatars.githubusercontent.com/u/61032370?v=4'}
    ]
    getFollows(nameArrayConst)
  },[])

  const getFollows = (nameArray:{name: string, link: string}[]) => {
    axios.get('https://duka-backend-undefined.herokuapp.com/getFollows')
    .then((res)=>{
      setFollowTalent(res.data) 
      console.log(nameArray)
      nameArray && setNameArr(nameArray.filter(pessoa => !res.data.includes(pessoa.name)))
      console.log(nameArr)
    })
    .catch((err)=>console.log(err))
  }
  const updateFollows = (action: string, nome: string) => {
      axios.post('https://duka-backend-undefined.herokuapp.com/updateFollows', {
          action: action,
          nome: nome,
      })
      .then(()=>{
        if(action.toLowerCase() === "push")
          setFollowTalent([...followTalent, nome])
        else if(action.toLowerCase() === "pop")
          setFollowTalent(followTalent.filter(talento => talento!==nome))
      })
      .catch((err)=>console.log(err))
  }

  return (
    <><div className="adjust-body">
        <body id = "myBody">
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
                <p className="number-company">{followTalent.length}</p>
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
                      <option value="javascript">São Paulo</option>
                      <option value="java">Rio de Janeiro</option>
                    </select>
                  </div>

                  <div>
                    <label>Cidade</label>
                    <select name="languages" id="lang">
                      <option value="" disabled selected hidden>Selecione a cidade</option>
                      <option value="javascript">Mogi das Cruzes</option>
                      <option value="java">Americana</option>
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
                  <button  className="filter-icon filter-icon-first"  onClick = {() => { if (search){setSearch(!search)}}}>
                    <X color="#FFFFFF" size={18} />
                  </button>

                  <button className="filter-icon" onClick = {() => {setSearch(!search)}}>
                    <Search color="#FFFFFF" size={18} />
                  </button>
                </div>
              </div>

              <div className="results-wrapper">
                { search ? <> {nameArr&&nameArr.map((item)=> <TalentCard style ={name === item.name? {display:'none'}:{display:'unset'}} CB ={() =>{setFollowTalent([...followTalent, item.name]); nameArr&&setNameArr(nameArr.filter(el => el.name!==item.name)); updateFollows("push", item.name)}} name={item.name}  perfil = {item.link}/>)}
                
                  <div className="pagination">
                    <p className="pagination-text">Número de página</p>
                    <div className="page-selected">
                      <p className="page-number">1</p>
                    </div>
                  </div>
                </>
                :
                <h2 className = "do-a-search">Descubra novos talentos realizando uma busca</h2>
                }
              </div>
            </div>

          <h2 className="section-title">Acompanhe seus talentos</h2>
          {
            followTalent.length===1 && followTalent[0]===""? 
            <h2 className = "do-a-search">Favorite um Talento para acompanhar seu crescimento bem de perto S2</h2>
            :<></>
          }

          { followTalent.includes('Raquel') ?
              <MyTalentCard
              name = "Raquel"
              completeName = {"Raquel de Oliveira dos Santos"}
              city = {"19 anos, São Paulo - SP"}
              talent = {"Futuro talento em Front-end"}
              unfollow={()=>{
                nameArr && setNameArr([...nameArr, {name:"Raquel", link: "https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?k=20&m=1291208214&s=612x612&w=0&h=WbHbwklzP81iAWV0dPlQWuBLxnbqJFk81a9OZG6qvSM="}])
                setFollowTalent(followTalent.filter(talento => talento!=="Raquel"))
                updateFollows("pop","Raquel")
              }}
              profile = {"https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?k=20&m=1291208214&s=612x612&w=0&h=WbHbwklzP81iAWV0dPlQWuBLxnbqJFk81a9OZG6qvSM="}
            /> : <></>
          }
           { followTalent.includes('Calebe')?
            <MyTalentCard 
              name = "Calebe"
              completeName = {"Calebe Fernandes de Oliveira"}
              city = {"19 anos, Americana - SP"}
              talent = {"Futuro talento em Front-end"}
              unfollow={()=>{
                nameArr && setNameArr([...nameArr, {name:"Calebe", link: "https://avatars.githubusercontent.com/u/66683288?v=4"}])
                setFollowTalent(followTalent.filter(talento => talento!=="Calebe"))
                updateFollows("pop","Calebe")
              }}
              profile = {'https://avatars.githubusercontent.com/u/66683288?v=4'}
            />
               : <></>
          }
           { followTalent.includes('Luanda')?
              <MyTalentCard 
              name = "Luanda"
              completeName = {"Luanda Shibata de Jesus Vital"}
              city = {"19 anos, Mogi das Cruzes - SP"}
              talent = {"Futuro talento em UX/UI"}
              unfollow={()=>{
                nameArr && setNameArr([...nameArr, {name:"Luanda", link: "https://avatars.githubusercontent.com/u/66751357?v=4"}])
                setFollowTalent(followTalent.filter(talento => talento!=="Luanda"))
                updateFollows("pop","Luanda")
              }}
              profile = {'https://avatars.githubusercontent.com/u/66751357?v=4'}
          />
           : <></>
          }
          { followTalent.includes('Thiago')?
            
            <MyTalentCard 
              name = "Thiago"
              completeName = {"Thiago Waib Castello Branco"}
              city = {"19 anos, Marília - SP"}
              talent = {"Futuro talento em FullStack"}
              unfollow={()=>{
                nameArr && setNameArr([...nameArr, {name:"Thiago", link: "https://avatars.githubusercontent.com/u/61032370?v=4"}])
                setFollowTalent(followTalent.filter(talento => talento!=="Thiago"))
                updateFollows("pop","Thiago")
              }}
              profile = {"https://avatars.githubusercontent.com/u/61032370?v=4"}
            />
            : <></>
            }
            { followTalent.includes('Thiago')?
              
              <MyTalentCard 
                name = "Thiago"
                completeName = {"Thiago Waib Castello Branco"}
                city = {"19 anos, Marília - SP"}
                talent = {"Futro talento em FullStack"}
                unfollow={()=>{
                  nameArr && setNameArr([...nameArr, {name:"Thiago", link: "https://avatars.githubusercontent.com/u/61032370?v=4"}])
                  setFollowTalent(followTalent.filter(talento => talento!=="Thiago"))
                  updateFollows("pop","Thiago")
                }}
                profile = {"https://avatars.githubusercontent.com/u/61032370?v=4"}
              />
              
              : <></>
            }

            {
              followTalent.length>1 ? 
              <div className="adjust-button">
              <button className="button-load-more">
                <p>Carregar mais talentos</p>
              </button>
            </div>

            :
            <></>
          
            }
          </div>
      
            
          <FooterComponent/>
        </body>
      </div>
    </>
  )
}

export default Dashboard;