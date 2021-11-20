import * as React from 'react'
import './style.css'

interface Props{
    cb: (escolha:number)=>void
    selected?: number
}

const Perg2:React.FC <Props> = ({cb, selected}) => {
    
    const aRef = React.useRef<HTMLHeadingElement>(null)
    const bRef = React.useRef<HTMLHeadingElement>(null)
    const cRef = React.useRef<HTMLHeadingElement>(null)
    const dRef = React.useRef<HTMLHeadingElement>(null)

    React.useEffect(()=>{
        if(selected===1)
            aRef.current?.classList.add("clicked")
        else if(selected===2)
            bRef.current?.classList.add("clicked")
        else if(selected===3)
            cRef.current?.classList.add("clicked")
        else if(selected===4)
            dRef.current?.classList.add("clicked") 
    })

    const handleClick = (option:string) => {
        aRef.current?.classList.remove("clicked")
        bRef.current?.classList.remove("clicked")
        cRef.current?.classList.remove("clicked")
        dRef.current?.classList.remove("clicked")
        if(option==="A")
            aRef.current?.classList.add("clicked")
        else if(option==="B")
            bRef.current?.classList.add("clicked")
        else if(option==="C")
            cRef.current?.classList.add("clicked")
        else
            dRef.current?.classList.add("clicked")  
    }

  return (<>
    <section className="pergunta">  
        <h2>2.</h2>
        <h3>Lorem ipsum solem bolem cotrem dorem mirem caste diem pite dinte</h3>
        <h4
        ref={aRef}
        onClick={()=>{
            cb(1)
            handleClick("A")
        }}
        ><span>A</span>Lorem Ipsum</h4>
        <h4
        ref={bRef}
        onClick={()=>{
            cb(2)
            handleClick("B")
        }}
        ><span>B</span>Lorem Ipsum</h4>
        <h4
        ref={cRef}
        onClick={()=>{
            cb(3)
            handleClick("C")
        }}
        ><span>C</span>Lorem Ipsum</h4>
        <h4
        ref={dRef}
        onClick={()=>{
            cb(4)
            handleClick("D")
        }}
        ><span>D</span>Lorem Ipsum</h4>
    </section>  
    </>);
};

export default Perg2;
