import { useState } from "react";
import Card from "../../components/dashboard/Card";
import Table from "../../components/dashboard/Table";

export default function Home() {
  const [tableData, setTableData] = useState([
    { id: 1, equipo: "Equipo A", proyecto: "Proyecto 1", duracion: "7 días", estado: "Activo" },
    { id: 2, equipo: "Equipo B", proyecto: "Proyecto 2", duracion: "3 días", estado: "Pendiente" },
    { id: 3, equipo: "Equipo C", proyecto: "Proyecto 3", duracion: "4 días", estado: "Activo" },
    { id: 4, equipo: "Equipo D", proyecto: "Proyecto 4", duracion: "3 días", estado: "Activo" },
  ]);

  return (
    <>
      <h1 className="text-xl font-semibold mb-4">¡Bienvenido al Dashboard!</h1>
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card
            title="Equipos"
            value="8"
            subtitles={["Equipos activos", "Equipos en espera de no.c"]}
          />
          <Card
            title="Recursos"
            subtitles={["Recursos material", "Recurso humano"]}
          />
        </div>
      </div>
      <div className="space-y-4">
        <Table data={tableData} />
      </div>
    </>
  );
}
