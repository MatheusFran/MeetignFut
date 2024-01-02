import React from "react";
import Lottie from 'lottie-react'
import fail_animation from '../assets/fail.json'
import '../App.css'

export const FalhaReuniao = (props) => {
    return (
        <>
            <div>
                <Lottie animationData={fail_animation} />
                <h3>Falha ao agendar reserva</h3>
                <p>Favor conferir disponibilidade</p>
                <button onClick={() => props.onButtonClick(1)}>Voltar para o início</button>
            </div>
        </>

    )
}