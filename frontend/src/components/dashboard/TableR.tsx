import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa'; 

export default function TableR({ data }: { data: any[] }) {
  const [selectedMonth, setSelectedMonth] = useState<string>('Enero');

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(e.target.value);
  };

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mt-6 px-6">
        <h2 className="text-xl font-semibold">Actividades</h2>

        <div className="flex items-center">
          <label htmlFor="month" className="mr-2 text-sm text-gray-700">Filtrar por mes:</label>

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

            <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-700" />
          </div>
        </div>
      </div>

      <table className="min-w-full table-auto mt-4">
        <thead>
          <tr className="bg-[var(--color-gray)] text-gray-300">
            <th className="px-4 py-2 text-left">Recurso</th>
            <th className="px-4 py-2 text-left">Cantidad</th>
            <th className="px-4 py-2 text-left">Estado</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="px-4 py-2">{item.recurso}</td>
              <td className="px-4 py-2">{item.cantidad}</td>
              <td className="px-4 py-2 text-green-600">{item.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
