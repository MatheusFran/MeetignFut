import React from "react";
import '../App.css';

export const Started = (props) => {

    const handleRedirect = (option) => {
        if (option === 1) {
            props.onButtonClick(1);
        } else if (option === 2) {
            props.onButtonClick(2);
        } else if (option === 3) {
            props.onButtonClick(3);
        }
    }

    return (
        <>
            <div className="area-perguntas">
                <div>
                    <h3>Escolha uma opção:</h3>
                    <button className="btn" onClick={() => handleRedirect(1)}>Agendar Reunião</button>
                    <button className="btn" onClick={() => handleRedirect(2)}>Conferir Horários</button>
                    <div>
                        <button className="btn-1" onClick={() => handleRedirect(3)}>Inicio</button>
                    </div>
                </div>
            </div>
        </>
    );
}
