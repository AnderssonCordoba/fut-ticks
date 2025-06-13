import React from "react";

const StatCard = ({ valores, statName, ultimos10, ultimos5 }) => {
  const safe = (obj, key) => obj?.[key] ?? "-";

  return (
    <div className="encuentros">
      <div className="encuentro-card">
        <h3 className="text-center text-lg font-semibold capitalize mb-3">{statName}</h3>

        {/* Mostrar los valores analizados */}
        {valores?.length > 0 && (
          <div className="text-center text-sm mb-4">
            <span className="font-medium">Valores: </span>
            <span className="text-gray-700">
              [{valores.join(", ")}]
            </span>
          </div>
        )}

        {/* Tabla de promedios */}
        <table className="w-full text-center text-sm border mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-1"></th>
              <th className="border p-1">(10) prom</th>
              <th className="border p-1">(10) min</th>
              <th className="border p-1">(5) prom</th>
              <th className="border p-1">(5) min</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-1 font-medium">Moda</td>
              <td className="border p-1">{safe(ultimos10.promedios, "moda")}</td>
              <td className="border p-1">{safe(ultimos10.minimos, "moda")}</td>
              <td className="border p-1">{safe(ultimos5.promedios, "moda")}</td>
              <td className="border p-1">{safe(ultimos5.minimos, "moda")}</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-1 font-medium">Media</td>
              <td className="border p-1">{safe(ultimos10.promedios, "media")}</td>
              <td className="border p-1">{safe(ultimos10.minimos, "media")}</td>
              <td className="border p-1">{safe(ultimos5.promedios, "media")}</td>
              <td className="border p-1">{safe(ultimos5.minimos, "media")}</td>
            </tr>
            <tr>
              <td className="border p-1 font-medium">Mediana</td>
              <td className="border p-1">{safe(ultimos10.promedios, "mediana")}</td>
              <td className="border p-1">{safe(ultimos10.minimos, "mediana")}</td>
              <td className="border p-1">{safe(ultimos5.promedios, "mediana")}</td>
              <td className="border p-1">{safe(ultimos5.minimos, "mediana")}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatCard;
