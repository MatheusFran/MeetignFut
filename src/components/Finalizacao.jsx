import React from "react";
import Lottie from 'lottie-react'
import sucess_animation from '../assets/sucess.json'
import '../App.css'

export const Finalizar = (props) => {
    return (
        <>
            <div>
                <Lottie animationData={sucess_animation} />
                <h3>Finalizado</h3>
                <p>Seus dados foram processados.</p>
                <button onClick={() => props.onButtonClick(1)}>Voltar para o início</button>
            </div>
        </>

    )
}