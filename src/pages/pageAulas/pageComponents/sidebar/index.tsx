import * as React from 'react'
import './style.css'

interface Props{
    screen: (screen: number)=>void
    onClose: ()=>void
}

const SideBar:React.FC <Props> = ({ screen, onClose}) => {

    const sidebarRef = React.useRef<HTMLDivElement>(null)

    const handleClick = (option: number) => {
        screen(option)
    }

    return(<>
    
        <section 
        id="sidebar"
        ref={sidebarRef}
        >
            <span 
            id="closeSidebar"
            onClick={onClose}
            >
                <strong>⮿</strong> Fechar
            </span>

            <h3>Navegue pelo<br/>conteúdo do Curso</h3>

            <div 
                className="listAula"
                onClick={()=>handleClick(1)}
            >
                <span>●</span>
                <p>Aula Magna -<br/>Conheça a Plataforma</p>
            </div>
            <div 
                className="listQuiz"
                onClick={()=>handleClick(2)}
            >
                <span>♦</span>
                <p>Quiz</p>
            </div>
        </section>
    
    </>)
}

export default SideBar;