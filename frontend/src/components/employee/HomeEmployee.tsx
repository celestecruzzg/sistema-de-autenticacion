import { useState } from "react";
import Table from "./TableEmployee";
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

// Registrar los componentes de Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

export default function Home() {
  const [tableData, setTableData] = useState([
    { id: 1, equipo: "Equipo A", proyecto: "Proyecto 1", duracion: "7 días", estado: "Activo" },
    { id: 2, equipo: "Equipo B", proyecto: "Proyecto 2", duracion: "3 días", estado: "Activo" },
    { id: 3, equipo: "Equipo C", proyecto: "Proyecto 3", duracion: "4 días", estado: "Activo" },
    { id: 4, equipo: "Equipo D", proyecto: "Proyecto 4", duracion: "3 días", estado: "Activo" },
  ]);

  const dataPie1 = {
    labels: ["Activos", "En espera"],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ["#2D8647", "#BDBDBD"], 
      },
    ],
  };

  const dataPie2 = {
    labels: ["Material", "Humano"],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["#2D8647", "#BDBDBD"], 
      },
    ],
  };

  return (
    <>
      <h1 className="text-xl font-semibold mb-4">¡Bienvenido al Dashboard!</h1>
      <div className="p-6">

        {/* Tabla arriba */}
        <div className="space-y-4">
          <Table data={tableData} />
        </div>

        {/* Gráficas abajo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-center">
            <div className="w-1/2">
              <h3 className="text-lg font-semibold">Equipo</h3><br />
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-700"></span>
                <p className="text-sm text-gray-500">Compañeros activos</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gray-400"></span>
                <p className="text-sm text-gray-500">Compañeros en espera</p>
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

          <div className="bg-white rounded-xl shadow-lg p-6 flex items-center">
            <div className="w-1/2">
              <h3 className="text-lg font-semibold">Recursos</h3><br />
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-700"></span>
                <p className="text-sm text-gray-500">Recursos materiales</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gray-400"></span>
                <p className="text-sm text-gray-500">Recursos humanos</p>
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
