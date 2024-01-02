import React, { useContext } from "react";
import { InputContext } from "../context/Reuniao";
import '../App.css'

export const ConferirHorarios = (props) => {
    let agenda = [
        { 'Data':'16/12/2023','Horário':'08:00 ás 10:00','Sala':'Nexus','Status':'Agendado'},
        { 'Data':'16/12/2023','Horário':'08:00 ás 09:30','Sala':'Silo','Status':'Agendado'},
        { 'Data':'16/12/2023','Horário':'15:10 ás 16:10','Sala':'Lounge','Status':'Agendado'},
        { 'Data':'18/12/2023','Horário':'14:00 ás 10:00','Sala':'Palace','Status':'Agendado'},
        { 'Data':'18/12/2023','Horário':'16:00 ás 10:00','Sala':'Palace','Status':'Agendado'},
        { 'Data':'20/12/2023','Horário':'08:00 ás 10:00','Sala':'Nexus','Status':'Agendado'},
        { 'Data':'21/12/2023','Horário':'08:00 ás 10:00','Sala':'Nexus','Status':'Agendado'},
        { 'Data':'02/02/2024','Horário':'08:00 ás 10:00','Sala':'Nexus','Status':'Agendado'}
    ]

    const colunas = [
        <th key="data">Data</th>,
        <th key="horario">Horário</th>,
        <th key="sala">Sala</th>,
        <th key="status">Status</th>
      ];
  
      const linhas = agenda.map((item, index) => (
        <tr key={index}>
          <td>{item.Data}</td>
          <td>{item.Horário}</td>
          <td>{item.Sala}</td>
          <td>{item.Status}</td>
        </tr>
      ));

    const handleRedirect = (option) => {
        if (option === 1) {
            props.onButtonClick(1);
        } else if (option === 2) {
            props.onButtonClick(2);
        }
    }


    return (
        <>
            <div className='modal-overlay'>
                <h2>Horários Agendados</h2>
                <div>
                    <table className="table-horarios">
                        <thead>
                            <tr>{colunas}</tr>
                        </thead>
                        <tbody>{linhas}</tbody>
                    </table>
                </div>
                <div className="button-group">
                    <button className="btn" onClick={() => handleRedirect(1)}>Voltar</button>
                </div>
            </div>
        </>
    );
}

