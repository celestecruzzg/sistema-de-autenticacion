import { useParams } from "react-router-dom";
import { FaPlus, FaEdit } from "react-icons/fa";

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
        { nombre: "Adriel Rodríguez", especialidad: "Desarrollador Backend", tareas: 3 },
        { nombre: "Sergio Toppec", especialidad: "Diseñador de UI/UX", tareas: 3 },
        { nombre: "Nahui Pérez", especialidad: "Diseñador de UI/UX", tareas: 3 },
        { nombre: "Héctor Barreda", especialidad: "Desarrollador Frontend", tareas: 1 },
        { nombre: "Misael Aguilar", especialidad: "Arquitecto de DB", tareas: 3 },
        { nombre: "Arturo Ojeda", especialidad: "Desarrollador Backend", tareas: 1 },
        { nombre: "Kevin Velazquez", especialidad: "Diseñador de UI/UX", tareas: 2 },
      ],
      tareas: [
        { tarea: "Modelar BD", asignado: "Misael Aguilar", estado: "Pendiente" },
        { tarea: "Diseñar wireframes web", asignado: "Sergio Toppec", estado: "En revisión" },
        { tarea: "Diseñar wireframes móvil", asignado: "Nahui Pérez", estado: "Pendiente" },
        { tarea: "Maquetado del frontend", asignado: "Celeste González", estado: "Pendiente" },
        { tarea: "Maquetado del frontend", asignado: "Héctor Barreda", estado: "Pendiente" },
        { tarea: "Definir arquitectura backend", asignado: "Adriel Rodríguez", estado: "En revisión" },
      ],
    };
  
    return (
      <div className="flex">
        <div className="flex-1 p-6 overflow-auto">
          {/* Header del Proyecto */}
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold">{proyecto.nombre}</h2>
            <p className="text-gray-600">{proyecto.descripcion}</p>
            <p className={`font-semibold mt-2 ${proyecto.estado === "Activo" ? "text-green-600" : "text-red-600"}`}>
              Estado: {proyecto.estado}
            </p>
          </div>
  
          {/* Equipos en el proyecto */}
          <div className="mt-6 bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Equipos en el proyecto</h3>
            <p className="text-gray-600">Muestra una lista de los equipos en el proyecto creado</p>
            <div className="flex gap-3 mt-4">
              {proyecto.equipos.map((equipo, index) => (
                <button key={index} className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
                  {equipo}
                </button>
              ))}
            </div>
          </div>
  
          {/* Tabla de miembros */}
          <div className="mt-6 bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Miembros del equipo</h3>
            <p className="text-gray-600">Muestra una lista de los miembros del equipo seleccionado</p>
            <table className="w-full mt-4 border-collapse">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="p-2 text-left">Nombre completo</th>
                  <th className="p-2 text-left">Especialidad</th>
                  <th className="p-2 text-left">Total de tareas</th>
                </tr>
              </thead>
              <tbody>
                {proyecto.miembros.map((miembro, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-2">{miembro.nombre}</td>
                    <td className="p-2">{miembro.especialidad}</td>
                    <td className="p-2">{miembro.tareas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  
          {/* Tabla de tareas asignadas */}
          <div className="mt-6 bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Tareas asignadas</h3>
              <button className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                <FaPlus className="mr-2" /> Asignar tarea
              </button>
            </div>
            <p className="text-gray-600">Lista de las tareas asignadas del equipo seleccionado</p>
            <table className="w-full mt-4 border-collapse">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="p-2 text-left">Tarea asignada</th>
                  <th className="p-2 text-left">Miembro asignado</th>
                  <th className="p-2 text-left">Estatus</th>
                  <th className="p-2"></th>
                </tr>
              </thead>
              <tbody>
                {proyecto.tareas.map((tarea, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-2">{tarea.tarea}</td>
                    <td className="p-2">{tarea.asignado}</td>
                    <td className={`p-2 font-semibold ${tarea.estado === "Pendiente" ? "text-red-600" : "text-yellow-600"}`}>
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
    );
  };
  
  export default ProyectoDetalle;
  