import React, { useContext } from "react";
import { InputContext } from "../context/Reuniao";

export const DadosReuniao = (props) => {
    const { inputValue, handleInputChange } = useContext(InputContext);

    const handleRedirect = (option) => {
        if (inputValue) {
            if (option === 1) {
                props.onButtonClick(1);
            } else if (option === 2) {
                props.onButtonClick(2);
            }
        }
    };

    return (
        <div className="area-perguntas">
            <div>
                <h3>Defina dados da reunião:</h3>

                <div className="form-group">
                    <label htmlFor="data">Data:</label>
                    <input
                        type="date"
                        id="data"
                        className="input-style"
                        value={inputValue.data}
                        onChange={(e) => handleInputChange(e, 'data')}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="horarioInicio">Horário de Início:</label>
                    <input
                        type="time"
                        id="horarioInicio"
                        className="input-style"
                        value={inputValue.horarioinicio}
                        onChange={(e) => handleInputChange(e, 'horarioinicio')}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="horarioTermino">Horário de Término:</label>
                    <input
                        type="time"
                        id="horarioTermino"
                        className="input-style"
                        value={inputValue.horariotermino}
                        onChange={(e) => handleInputChange(e, 'horariotermino')}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="sala">Sala sugerida:</label>
                    <select
                        id="sala"
                        className="input-style"
                        value={inputValue.sala}
                        onChange={(e) => handleInputChange(e, 'sala')}
                    >
                        <option value="Nexus">Nexus (+3 pessoas)</option>
                        <option value="Palace">Palace (+7 pessoas)</option>
                        <option value="Silo">Silo (+15 pessoas)</option>
                        <option value="Lounge">Espaço Lounge (+20 pessoas)</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="lanche">Lanche</label>
                    <select
                        id="lanche"
                        className="input-style"
                        value={inputValue.lanche}
                        onChange={(e) => handleInputChange(e, 'lanche')}
                    >
                        <option value="Sem lanche">Sem lanche</option>
                        <option value="cafe+agua">Café + Água</option>
                        <option value="cafe+agua+paodequeijo">Café + Água + Pão de Queijo</option>
                        <option value="lancheespecial">Lanche especial (informar na recepção)</option>
                    </select>
                </div>

                <div className="button-group">
                    <button className="btn" onClick={() => handleRedirect(1)}>Voltar</button>
                    <button className="btn" onClick={() => handleRedirect(2)}>Próximo</button>
                </div>
            </div>
        </div>
    );
};
