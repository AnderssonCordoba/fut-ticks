import React, { useState } from 'react';
import FilterTabs from '../components/FilterTabs';
import StatCard from '../components/StatCard';
import useAppStore from '../store/useAppStore';

const Stats = () => {
  const { searchData } = useAppStore();
  const [equipoSeleccionado, setEquipoSeleccionado] = useState(0); // 0: equipoA, 1: equipoB

  const equipoKey = equipoSeleccionado === 0 ? 'equipoA' : 'equipoB';

  const estadisticas10 = searchData.data.estadisticas?.ultimos10?.[equipoKey] || {};
  const estadisticas5 = searchData.data.estadisticas?.ultimos5?.[equipoKey] || {};
 

  return (
    <div className="p-1">
        <div className="filter-tabs-sticky">
            <FilterTabs
                equipoA={{ nombre: searchData.equipoA.nombre, escudo: searchData.equipoA.escudo }}
                equipoB={{ nombre: searchData.equipoB.nombre, escudo: searchData.equipoB.escudo }}
                seleccionado={equipoSeleccionado}
                onChange={setEquipoSeleccionado}
            />
            
        </div>

      <div className="mt-2 grid gap-4">
        {Object.keys(estadisticas10).map((statName) => (
            <StatCard
                key={statName}
                statName={statName}
                valores={estadisticas10[statName]?.valores}
                ultimos10={{
                    promedios: estadisticas10[statName]?.promedios || {},
                    minimos: estadisticas10[statName]?.minimos || {},
                }}
                ultimos5={{
                    promedios: estadisticas5[statName]?.promedios || {},
                    minimos: estadisticas5[statName]?.minimos || {},
                }}
            />

        ))}
      </div>
    </div>
  );
};

export default Stats;
