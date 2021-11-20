import React from "react";

import './styles.css';

import logo from '../../assets/landingPage/Logo Duka.svg'




const  FooterComponent:React.FC  = () => {
    return (
        <>
            <div className="footer">
                <img src={logo}  alt="Duka logo" />
            </div>
        </>
    );
};

export default FooterComponent;