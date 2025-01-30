import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaTrash, FaEllipsisV, FaEdit, FaArchive } from "react-icons/fa";

const Proyectos = () => {
  const navigate = useNavigate();
  
  const [proyectos] = useState([
    { id: 1, nombre: "Sistema de Gestión", creador: "Celeste González", estado: "Activo" },
    { id: 2, nombre: "E-commerce", creador: "Carlos Pérez", estado: "Activo" },
    { id: 3, nombre: "Red Social", creador: "Ana López", estado: "Inactivo" },
    { id: 4, nombre: "App Móvil", creador: "Juan Torres", estado: "Activo" },
  ]);

  const [busqueda, setBusqueda] = useState("");
  const [menuAbierto, setMenuAbierto] = useState<number | null>(null);

  // Filtrar proyectos según el término de búsqueda
  const proyectosFiltrados = proyectos.filter((proyecto) =>
    proyecto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="p-4 min-h-screen">
      {/* Encabezado */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Proyectos</h2>
        <div className="flex gap-3">
          <button className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            <FaPlus className="mr-2" /> Nuevo proyecto
          </button>
          <button className="flex items-center bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400">
            <FaTrash className="mr-2" /> 
          </button>
        </div>
      </div>

      {/* Buscador */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Buscar proyectos..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none"
        />
      </div>

      {/* Lista de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {proyectosFiltrados.length > 0 ? (
          proyectosFiltrados.map((proyecto) => (
            <div key={proyecto.id} className="bg-white shadow p-4 relative">
              <h3 className="text-lg font-semibold text-gray-800">{proyecto.nombre}</h3>
              <p className="text-sm text-gray-600">Creado por: {proyecto.creador}</p>
              <p className={`text-sm font-semibold mt-2 ${proyecto.estado === "Activo" ? "text-green-600" : "text-red-600"}`}>
                Estado: {proyecto.estado}
              </p>
              
              {/* Botón de opciones */}
              <div className="absolute top-4 right-4">
                <button onClick={() => setMenuAbierto(menuAbierto === proyecto.id ? null : proyecto.id)}
                  className="text-gray-600 hover:text-gray-800">
                  <FaEllipsisV />
                </button>

                {/* Menú desplegable */}
                {menuAbierto === proyecto.id && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
                    <button className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
                      onClick={() => alert("Editar proyecto")}>
                      <FaEdit className="mr-2" /> Editar
                    </button>
                    <button className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
                      onClick={() => alert("Archivar proyecto")}>
                      <FaArchive className="mr-2" /> Archivar
                    </button>
                    <button className="w-full flex items-center px-4 py-2 text-red-600 hover:bg-red-200"
                      onClick={() => alert("Eliminar proyecto")}>
                      <FaTrash className="mr-2" /> Eliminar
                    </button>
                  </div>
                )}
              </div>

              {/* Botón para ver detalles */}
              <button
                onClick={() => navigate(`/dashboard/proyectos/${proyecto.id}`)}
                className="mt-4 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-900"
              >
                Ver detalles
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No se encontraron proyectos.</p>
        )}
      </div>
    </div>
  );
};

export default Proyectos;
