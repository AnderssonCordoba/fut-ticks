import React from 'react';
import './EncuentroCard.css';

const EncuentroCard = ({ equipoA, equipoB }) => {
  return (
    <div className="encuentro-card">
      {/* Escudo equipo A */}
      <img
        src={equipoA.escudo}
        alt={equipoA.nombre}
      />

      {/* Nombres */}
      <div className="encuentro-card-nombres">
        {equipoA.nombre} <br /> vs <br /> {equipoB.nombre}
      </div>

      {/* Escudo equipo B */}
      <img
        src={equipoB.escudo}
        alt={equipoB.nombre}
      />
    </div>
  );
};

export default EncuentroCard;
