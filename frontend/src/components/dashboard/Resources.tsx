import { useState } from "react";
import Table from "../../components/dashboard/Table";
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

  // Datos de ejemplo para los gráficos de pastel simplificados
  const dataPie1 = {
    labels: ["Disponible", "En uso", "Reservado"],
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const dataPie2 = {
    labels: ["Recurso 1", "Recurso 2", "Recurso 3"],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <>
      <h1 className="text-xl font-semibold mb-4">¡Vista de Recursos!</h1>
      <div className="p-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-medium">Tabla de Recursos</h3>
            <Table data={tableData1} />
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xs font-semibold ">Asignación de Recursos</h3>
            <Table data={tableData2} />
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 flex justify-center items-center">
            <h3 className="text-xl font-medium mb-2">Disponibilidad de Recursos</h3>
            <Pie
              data={dataPie1}
              options={{
                responsive: true,
                plugins: { legend: { display: false } },
                aspectRatio: 1, // Hace el gráfico más pequeño y ajustado
                maintainAspectRatio: false,
              }}
              width={100}
              height={100}
            />
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 flex justify-center items-center">
            <h3 className="text-xl font-medium mb-4">Asignación de Recursos</h3>
            <Pie
              data={dataPie2}
              options={{
                responsive: true,
                plugins: { legend: { display: false } },
                aspectRatio: 1, // Hace el gráfico más pequeño y ajustado
                maintainAspectRatio: false,
              }}
              width={100} // Puedes ajustar más si es necesario
              height={100} // Puedes ajustar más si es necesario
            />
          </div>
        </div>
      </div>
    </>
  );
}
