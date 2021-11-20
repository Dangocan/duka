import * as React from 'react'
import './style.css'
import ArrowRight from './../../../../assets/icons/arrow-right.svg'
import ArrowLeft from './../../../../assets/icons/arrow-left.svg'

interface Props{
    forward: boolean
    callback: ()=>void
}

const Next: React.FC <Props> = ({forward, callback}) => {
    if(forward===true){
        return (<>
        
            <section 
                id="next"
                onClick={callback}
            >
                <p>Próxima Aula
                    <img src={ArrowRight} alt=""/>
                </p>
            </section>
        </>)
    }else{
        return (<>
        
            <section 
                id="next"
                className="backwards"
                onClick={callback}
            >
                <p>
                    <img src={ArrowLeft} alt=""/>
                    Aula passada 
                </p>
            </section>
        </>)
    }
        
}

export default Next;