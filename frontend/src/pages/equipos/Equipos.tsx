import { useState } from "react";
import { FaPlus, FaSearch, FaUsers, FaEllipsisV, FaUserPlus } from "react-icons/fa";

const Equipos = () => {
  const [equipos] = useState([
    {
      id: 1,
      nombre: "Equipo A",
      descripcion: "Desarrollo de plataforma e-commerce",
      proyectoAsignado: "E-commerce",
      integrantes: 3,
      miembros: [
        { nombre: "Celeste González", especialidad: "Desarrollador Frontend", tareas: 1 },
        { nombre: "Adriel Rodríguez", especialidad: "Desarrollador Backend", tareas: 3 },
        { nombre: "Sergio Toppec", especialidad: "Diseñador de UI/UX", tareas: 3 }
      ]
    },
    {
      id: 2,
      nombre: "Equipo B",
      descripcion: "Aplicación móvil para gestión de proyectos",
      proyectoAsignado: "App Móvil",
      integrantes: 5,
      miembros: [
        { nombre: "Nahui Pérez", especialidad: "Diseñador de UI/UX", tareas: 3 },
        { nombre: "Héctor Barreda", especialidad: "Desarrollador Frontend", tareas: 1 },
        { nombre: "Misael Aguilar", especialidad: "Arquitecto de DB", tareas: 3 },
        { nombre: "Arturo Ojeda", especialidad: "Desarrollador Backend", tareas: 1 },
        { nombre: "Kevin Velazquez", especialidad: "Diseñador de UI/UX", tareas: 2 }
      ]
    }
  ]);

  const [busqueda, setBusqueda] = useState("");

  // Filtrar equipos según el término de búsqueda
  const equiposFiltrados = equipos.filter((equipo) =>
    equipo.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="p-4 min-h-screen">
      {/* Encabezado */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Equipos</h2>
        <div className="flex gap-3">
          <button className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            <FaPlus className="mr-2" /> Crear equipo
          </button>
          <div className="relative">
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar equipo..."
              className="w-60 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none"
            />
            <FaSearch className="absolute top-2 right-2 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Lista de equipos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {equiposFiltrados.length > 0 ? (
          equiposFiltrados.map((equipo) => (
            <div key={equipo.id} className="bg-white shadow p-4 relative rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 flex justify-between items-center">
                {equipo.nombre}
                <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                  {equipo.proyectoAsignado}
                </span>
              </h3>
              <p className="text-sm text-gray-600 mt-2">{equipo.descripcion}</p>

              {/* Miembros del equipo */}
              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <FaUsers className="text-gray-500" />
                  <span className="text-sm text-gray-600">
                    {equipo.integrantes} Miembros del equipo
                  </span>
                </div>
                {equipo.miembros.map((miembro) => (
                  <div key={miembro.nombre} className="flex justify-between items-center mt-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">{miembro.nombre}</span>
                      <span className="text-xs text-gray-500">({miembro.especialidad})</span>
                    </div>
                    <div className="relative">
                      <button className="text-gray-500 hover:text-gray-700">
                        <FaEllipsisV />
                      </button>
                      
                    </div>
                  </div>
                ))}
              </div>

              {/* Botón para añadir miembro */}
              <button className="mt-4 w-full flex justify-center bg-green-600 items-center text-white px-4 py-2 rounded-lg hover:bg-green-700">
                <FaPlus className="mr-2" /> Añadir miembro
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No se encontraron equipos.</p>
        )}
      </div>
    </div>
  );
};

export default Equipos;
