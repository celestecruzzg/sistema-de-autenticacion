// src/components/dashboard/Table.tsx
import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa'; // Importa el ícono de calendario desde react-icons

export default function Table({ data }: { data: any[] }) {
  const [selectedMonth, setSelectedMonth] = useState<string>('Enero');

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(e.target.value);
  };

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md">
      {/* Contenedor con flex para el título y el filtro */}
      <div className="flex justify-between items-center mt-6 px-6">
        {/* Título de la tabla */}
        <h2 className="text-xl font-semibold">Actividades</h2>

        {/* Filtro por mes */}
        <div className="flex items-center">
          <label htmlFor="month" className="mr-2 text-sm text-gray-700">Filtrar por mes:</label>
          
          {/* Caja con ícono de calendario */}
          <div className="relative">
            <select
              id="month"
              value={selectedMonth}
              onChange={handleMonthChange}
              className="px-1 py-1 pl-12 pr-4 border rounded-md text-sm" 
            >
              <option value="Enero">Enero</option>
              <option value="Febrero">Febrero</option>
              <option value="Marzo">Marzo</option>
              <option value="Abril">Abril</option>
              <option value="Mayo">Mayo</option>
              <option value="Junio">Junio</option>
              <option value="Julio">Julio</option>
              <option value="Agosto">Agosto</option>
              <option value="Septiembre">Septiembre</option>
              <option value="Octubre">Octubre</option>
              <option value="Noviembre">Noviembre</option>
              <option value="Diciembre">Diciembre</option>
            </select>

            {/* Ícono de calendario */}
            <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Tabla */}
      <table className="min-w-full table-auto mt-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Equipo</th>
            <th className="px-4 py-2 text-left">Proyecto</th>
            <th className="px-4 py-2 text-left">Duración</th>
            <th className="px-4 py-2 text-left">Estado</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="px-4 py-2">{item.equipo}</td>
              <td className="px-4 py-2">{item.proyecto}</td>
              <td className="px-4 py-2">{item.duracion}</td>
              <td className="px-4 py-2 text-green-600">{item.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
