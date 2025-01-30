import { useState } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import TableR from "./TableR";

// Registrar los componentes de Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

export default function Recursos() {
  const [tableData1, setTableData1] = useState([
    { id: 1, recurso: "Recurso A", cantidad: "20", estado: "Disponible" },
    { id: 2, recurso: "Recurso B", cantidad: "10", estado: "En uso" },
    { id: 3, recurso: "Recurso C", cantidad: "15", estado: "Disponible" },
  ]);

  const [tableData2, setTableData2] = useState([
    { id: 1, equipo: "Equipo A", recurso: "Recurso 1", cantidad: "5" },
    { id: 2, equipo: "Equipo B", recurso: "Recurso 2", cantidad: "3" },
    { id: 3, equipo: "Equipo C", recurso: "Recurso 3", cantidad: "7" },
  ]);


  const dataPie1 = {
    labels: ["Disponible", "En uso", "Reservado"],
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: ["#2D8647", "#BDBDBD", "#FFCE56"],
      },
    ],
  };

  const dataPie2 = {
    labels: ["Recurso 1", "Recurso 2", "Recurso 3"],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ["#BDBDBD", "#2D8647", "#FFCE56"],
      },
    ],
  };

  return (
    <>
      <h1 className="text-xl font-semibold mb-4">Recursos</h1>
      <div className="p-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold">Tabla de Recursos</h3>
            <TableR data={tableData1} />
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold ">Asignación de Recursos</h3>
            <TableR data={tableData2} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Gráfica 1 */}
          <div className="bg-white rounded-xl shadow-lg p-4 flex items-center h-48 overflow-hidden">
            <div className="w-full">
              <h3 className="text-xs font-bold text-left mb-2">Disponibilidad de Recursos</h3>
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <h3 className="text-xs font-medium text-left">Recurso Humano</h3>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-gray-500 rounded-full mr-2"></div>
                <h3 className="text-xs font-medium text-left">Recurso Material</h3>
              </div>
            </div>
            <div className="w-1/2 flex justify-center">
              <Pie
                data={dataPie1}
                options={{
                  responsive: true,
                  plugins: { legend: { display: false } },
                  maintainAspectRatio: false,
                }}
                width={80}
                height={80}
              />
            </div>
          </div>

          {/* Gráfica 2 */}
          <div className="bg-white rounded-xl shadow-lg p-4 flex items-center h-48 overflow-hidden">
            <div className="w-full">
              <h3 className="text-xs font-bold text-left mb-2">Asignación de Recursos</h3>
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <h3 className="text-xs font-medium text-left">Recurso Humano</h3>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-gray-500 rounded-full mr-2"></div>
                <h3 className="text-xs font-medium text-left">Recurso Material</h3>
              </div>
            </div>
            <div className="w-1/2 flex justify-center">
              <Pie
                data={dataPie2}
                options={{
                  responsive: true,
                  plugins: { legend: { display: false } },
                  maintainAspectRatio: false,
                }}
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

