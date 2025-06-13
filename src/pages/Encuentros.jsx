import React, { useState } from "react";
import FilterTabs from "../components/FilterTabs";
import EncuentrosTable from "../components/EncuentrosTable";
import useAppStore from "../store/useAppStore";

const Encuentros = () => {
  const { searchData } = useAppStore();
  const [equipoSeleccionado, setEquipoSeleccionado] = useState(0);

  const equipoKey = equipoSeleccionado === 0 ? "equipoA" : "equipoB";
  const encuentros = searchData.data?.[equipoKey] || [];

  return (
    <div className="p-1">
        <div className="filter-tabs-sticky">
            <FilterTabs
                equipoA={{
                nombre: searchData.equipoA.nombre,
                escudo: searchData.equipoA.escudo,
                }}
                equipoB={{
                nombre: searchData.equipoB.nombre,
                escudo: searchData.equipoB.escudo,
                }}
                seleccionado={equipoSeleccionado}
                onChange={setEquipoSeleccionado}
            />
            
        </div>

      <div className="mt-4">
        {encuentros.map((encuentro, index) => (
          <EncuentrosTable
            key={index}
            miEquipo={encuentro.miEquipo}
            adversario={encuentro.adversario}
          />
        ))}
      </div>
    </div>
  );
};

export default Encuentros;
