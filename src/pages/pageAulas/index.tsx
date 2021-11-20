import * as React from 'react'

import './style.css'

import { Titulo, Body, Next, Button, SideBar, QuizPage } from './pageComponents';
import { MediaPlayer } from '../../components';

const PageAulas: React.FC = () => {

    const [show, setShow] = React.useState(false)
    const [screenOption, setScreenOption] = React.useState(1)
    const pageRef = React.useRef<HTMLDivElement>(null)

    if(show===true){
        document.body.style.overflow = "hidden"
        pageRef.current?.classList.add("darken")
    }else{
        document.body.style.overflow = "auto"
        pageRef.current?.classList.remove("darken")
    }

    return (<>
        
            {show&&(
            <div 
            id="pageFilter"
            ref={pageRef}
            onClick={(e)=>{
                if(show && e.target === pageRef.current)
                    setShow(!show)
            }}
            >
                <SideBar 
                    screen={(option)=>{
                        setScreenOption(option)
                    }}
                />
            </div>
            )}
            
        
        {/* Get Header Here */}
        
            <Button callback={()=>{
                setShow(!show)
            }}/>
            
            {screenOption === 1 && (<>
                <Titulo
                subtitulo={"Aula Magna - Conhecendo a Plataforma"}
                />
                <MediaPlayer/>
                <Body/>
                <Next forward={true} callback={()=>setScreenOption(screenOption+1)}/>
            </>)}
            {screenOption === 2 && (<>
                <Titulo
                subtitulo={"Quiz"}
                />
                <QuizPage/>
                <Next forward={false} callback={()=>setScreenOption(screenOption-1)}/>
            </>)}
            

        {/* Get Footer Here */}
        
    </>)
}

export default PageAulas;