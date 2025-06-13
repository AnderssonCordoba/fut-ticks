import React from 'react';
import './FilterTabs.css';

const FilterTabs = ({ equipoA, equipoB, seleccionado, onChange }) => {
  return (
    <div className="filter-tabs d-flex justify-content-center gap-2 mb-4">
      {[equipoA, equipoB].map((equipo, index) => {
        const isActive = seleccionado === index;
        return (
          <button
            key={index}
            className={`tab-button d-flex align-items-center px-3 py-2 ${isActive ? 'active' : ''}`}
            onClick={() => onChange(index)}
          >
            <img src={equipo.escudo} alt={equipo.nombre} className="escudo me-2" />
            <span>{equipo.nombre}</span>
          </button>
        );
      })}
    </div>
  );
};

export default FilterTabs;
