import React, { useContext } from "react";
import { InputContext } from "../context/Reuniao";
import '../App.css'

export const ConfirmarReserva = (props) => {
    const { inputValue } = useContext(InputContext);

    if (!inputValue) {
        console.log(inputValue)
        return <p> Carregando...</p>
    }
    const handleConfirmar = () => {
        props.onButtonClick(1);
    }
    const handleCancelar = () => {
        props.onButtonClick(2);
    }

    return (
        <>
            <div className='modal-overlay'>
                <div className='modal'>
                    <h3>Confirme a reserva</h3>
                    <p className="txt-subtitulo">Nome: <span style={{ color: 'white' }}>{inputValue.nome}</span></p>
                    <p className="txt-subtitulo">Participantes: <span style={{ color: 'white' }}>{inputValue.participantes}</span></p>
                    <p className="txt-subtitulo">Data: <span style={{ color: 'white' }}>{inputValue.data}</span></p>
                    <p className="txt-subtitulo">Horário de Início: <span style={{ color: 'white' }}>{inputValue.horarioinicio}</span></p>
                    <p className="txt-subtitulo">Horário de Término: <span style={{ color: 'white' }}>{inputValue.horariotermino}</span></p>
                    <p className="txt-subtitulo">Sala: <span style={{ color: 'white' }}>{inputValue.sala}</span></p>
                    <p className="txt-subtitulo">Lanche: <span style={{ color: 'white' }}>{inputValue.lanche}</span></p>
                    <div className='modal-buttons'>
                        <button className="btn" onClick={handleConfirmar}>Confirmar</button>
                        <button className="btn" onClick={handleCancelar}>Cancelar</button>
                    </div>
                </div>
            </div>

        </>
    );
}
