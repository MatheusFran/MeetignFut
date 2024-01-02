import React, { useState } from 'react';
import './App.css';
import { HomeAnimation } from './components/HomeAnimation';
import { Started } from './components/Started';
import { DadosPessoais } from './components/DadosPessoais';
import { DadosReuniao } from './components/DadosReunião';
import { ConfirmarReserva } from './components/ConfirmarReserva';
import logofutura from './assets/logofutura.png'
import logofutmeeting from './assets/LogoFuturaMeeting.png'
import { Finalizar } from './components/Finalizacao';
import { Reuniao } from './context/Reuniao';
import { FalhaReuniao } from './components/FalhaReuniao';
import { ConferirHorarios } from './components/ConferirHorarios';
import { AdicionarPessoas } from './components/AdicionarPessoas';

function App() {
  const [step, setStep] = useState(0)
  const [ok, setOk] = useState(true)

  const steps = [
    {
      title: 'Inicio',
      content: <HomeAnimation onClick={() => { setStep(1) }} />,
    },
    {
      title: 'Escolha uma opção:',
      content: <Started onButtonClick={(e) => { if (e === 1) { setStep(2) } else if (e === 2) { setStep(6) } else if (e === 3) { setStep(0) } }} />,
    },
    {
      title: 'Informe seus dados:',
      content: (
        <Reuniao>
          <DadosPessoais onButtonClick={(e) => { if (e === 1) { setStep(1) } else if (e === 2) { setStep(3) } }} />
        </Reuniao>
      )
    },
    {
      title: 'Escolha a data e horários:',
      content: (
        <Reuniao>
          <AdicionarPessoas onButtonClick={(e) => { if (e === 1) { setStep(2) } else if (e === 2) { setStep(4) } }} />
        </Reuniao>
      )
    },
    {
      title: 'Escolha a data e horários:',
      content: (
        <Reuniao>
          <DadosReuniao onButtonClick={(e) => { if (e === 1) { setStep(3) } else if (e === 2) { setStep(5) } }} />
        </Reuniao>
      )
    },
    {
      title: 'Confirmar Reserva',
      content: (
        <Reuniao>
          <ConfirmarReserva onButtonClick={(e) => { if (e === 1) { setStep(5) } else if (e === 2) { setStep(0) } }} />
        </Reuniao>)
    },
    {
      title: 'Finalizado',
      content: ok ? (<Finalizar onButtonClick={() => setStep(0)} />) : <FalhaReuniao onButtonClick={() => setStep(0)} />,
    },
    {
      title: 'Horários Agendados',
      content: <ConferirHorarios onButtonClick={(e) => { if (e === 1) { setStep(1) } }} />,
    },
  ];

  const renderContent = () => {
    const currentStep = steps[step];
    return (
      <div className='conteudo'>
        <div className='area-perguntas'>
          {currentStep.content}
        </div>
        <div className='logofutmeeting-container'>
          <img
            className='logofutmeeting'
            src={logofutmeeting}
          />
        </div>
        <p style={{ fontSize: '9px' }}>Futura Agronegócios Ltda © Todos os direitos reservados</p>
      </div>
    );
  };

  return <>{renderContent()}</>;
}

export default App;
