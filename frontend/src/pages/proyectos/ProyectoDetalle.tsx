import { useParams } from "react-router-dom";
import { FaEdit, FaPlus } from "react-icons/fa";

const ProyectoDetalle = () => {
  const { id } = useParams(); // Obtener el ID del proyecto desde la URL
  
    // Datos de ejemplo (reemplázalos con datos reales de una API o contexto)
    const proyecto = {
      id,
      nombre: "Nombre del proyecto",
      descripcion: "Descripción breve del proyecto creado",
      estado: "Activo",
      equipos: ["Equipo Junior", "Equipo Máster"],
      miembros: [
        { nombre: "Celeste González", especialidad: "Desarrollador Frontend", tareas: 1 },
        { nombre: "Adriel Rodríguez", especialidad: "Desarrollador Backend", tareas: 1 },
        { nombre: "Sergio Toppec", especialidad: "Diseñador de UI/UX", tareas: 1 },
        { nombre: "Nahui Pérez", especialidad: "Diseñador de UI/UX", tareas: 1 },
      ],
      tareas: [
        { tarea: "Diseñar wireframes web", asignado: "Sergio Toppec", estado: "En revisión" },
        { tarea: "Diseñar wireframes móvil", asignado: "Nahui Pérez", estado: "Pendiente" },
        { tarea: "Maquetado del frontend", asignado: "Celeste González", estado: "Pendiente" },
        { tarea: "Definir arquitectura backend", asignado: "Adriel Rodríguez", estado: "En revisión" },
      ],
    };
  
    return (
      <div className="p-4 max-h-screen">
        {/* Encabezado */}
        <div className="flex-wrap justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Sistema de Gestión</h2>
          <div className="flex gap-16">
            <p className="text-gray-500">Descripcion breve del proyecto creado</p>
            <p className="text-gray-500">Estado: <strong className="text-green-600">Activo</strong></p>
          </div>
        </div>
        {/* Contenido después del encabezado */}
        <div className="max-w-full bg-slate-300 py-0.5 mb-6"></div>
        <div className="flex gap-28">
          {/* Columna izquierda */}
          <div>
            {/* Card 1 - Columna izquierda */}
            <div className="flex-wrap justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-700">Equipos en el proyecto</h2>
              <div className="flex-wrap">
                <p className="text-gray-500 mb-4 text-sm">Muestra una lista de los equipos del proyecto creado</p>
                <div className="flex gap-6">
                  <button className="flex items-center bg-gray-600 text-sm text-white px-4 py-2 rounded-lg">
                    Equipo Junior
                  </button>
                  <button className="flex items-center bg-gray-400 text-sm text-white px-4 py-2 rounded-lg">
                    Equipo Senior
                  </button>
                </div>
              </div>
            </div>
            {/* Card 2 - Columna izquierda */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-700">Miembros del equipo</h2>
                <div className="flex-wrap">
                  <p className="text-gray-500 mb-4 text-sm">Muestra una lista de los miembros del equipo seleccionado</p>
                </div>
              </div>
              <div>
                <table>
                  <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="py-2 px-6 text-left text-sm">Nombre completo</th>
                    <th className="py-2 px-6 text-left text-sm">Especialidad</th>
                    <th className="py-2 px-6 text-left text-sm">Total de tareas</th>
                  </tr>
                </thead>
                <tbody>
                  {proyecto.miembros.map((miembro, index) => (
                    <tr key={index} className="border-t">
                      <td className="py-2 px-6 text-sm">{miembro.nombre}</td>
                      <td className="py-2 px-6 text-sm">{miembro.especialidad}</td>
                      <td className="py-2 px-6 text-sm text-center">{miembro.tareas}</td>
                    </tr>
                  ))}
                </tbody>
                </table>
              </div>
          </div>
          {/* Columna derecha */}
          <div className="">
            <div className="flex-wrap justify-between">
              <h2 className="text-xl font-semibold text-gray-700">Tareas asignadas</h2>
              <p className="text-gray-500 mb-4 text-sm">Muestra una lista de los miembros del equipo seleccionado</p>
            </div>
                <div className="flex-wrap mb-6">
                  <button className="flex items-center bg-green-600 text-white text-sm px-3 py-2 rounded-lg hover:bg-green-700">
                    <FaPlus className="mr-2 text-sm" /> Asignar tarea
                  </button>
                </div>
                <div>
                  <table>
                    <thead>
                      <tr className="bg-gray-200 text-gray-700">
                        <th className="p-2 px-6 text-sm text-left">Tarea asignada</th>
                        <th className="p-2 px-6 text-sm text-left">Miembro asignado</th>
                        <th className="p-2 px-6 text-sm text-left">Estatus</th>
                        <th className="p-2 px-6 text-sm"></th>
                      </tr>
                </thead>
                <tbody>
                  {proyecto.tareas.map((tarea, index) => (
                    <tr key={index} className="border-t">
                      <td className="p-2 px-6 text-sm">{tarea.tarea}</td>
                      <td className="p-2 px-6 text-sm">{tarea.asignado}</td>
                      <td className={`p-2 px-6 text-sm font-semibold ${tarea.estado === "Pendiente" ? "text-red-600" : "text-yellow-600"}`}>
                        {tarea.estado}
                      </td>
                      <td className="p-2">
                        <button className="text-gray-600 hover:text-gray-800">
                          <FaEdit />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                  </table>
                </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProyectoDetalle;