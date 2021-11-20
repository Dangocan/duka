import * as React from 'react'
import './style.css'

interface Props{
    direction: number
    cbD?: ()=>void
    cbE?: ()=>void
}

const Nav: React.FC <Props> = ({direction, cbD, cbE}) => {

    if(direction===2)
    {
        return (
            <section 
                className="navDir"
                
            >
                <p onClick={cbD}>Próxima
                </p>
            </section>
        )
    }
    else if(direction===0)
    {
        return (
            <section 
                className="navEsq"
                
            >
                <p onClick={cbE}>
                    Anterior
                </p>
            </section>
        )
    }
    else{
        return(<>
        <section 
            className="navEsq"
            
        >
            <p onClick={cbE}>
                Anterior
            </p>
        </section>
        <section 
            className="navDir"
            
            >
            <p onClick={cbD}>Próxima
            </p>
        </section>
        </>)
    }
    

}

export default Nav;