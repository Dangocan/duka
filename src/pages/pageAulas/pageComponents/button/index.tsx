import * as React from 'react'
import './style.css'

interface Props {
    callback: ()=>void
}

const Button: React.FC<Props> = ({callback}) => {
    const handleClick = () => {
        callback()
    }
    return (<>
        <button
        id="buttonButton"
        onClick={handleClick}
        >Botão</button>
    </>)
}

export default Button;