import { BsThreeDotsVertical } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";

const Asignaciones = () => {
  return (
    <div className="p-4 flex flex-col lg:flex-row gap-6 max-h-screen overflow-auto">
      {/* Lado izquierdo */}
      <div className="w-1/2 lg:w-1/2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Tareas Asignadas</h2>
          <button className="flex items-center bg-gray-500 text-white pr-2 px-3 py-2 rounded-lg hover:bg-gray-700 text-sm">
            Activo
            <RiArrowDropDownLine className="text-lg" />
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-xs md:text-sm">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="p-2 text-left">Equipo</th>
                <th className="p-2 text-left">Proyecto</th>
                <th className="p-2 text-left">Vencimiento</th>
                <th className="p-2 text-left">Estado</th>
                <th className="p-2 text-left">Acción</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((_, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className="p-2">Nombre del equipo</td>
                  <td className="p-2">Nombre del proyecto</td>
                  <td className="p-2">05/02/2025</td>
                  <td className="p-2">
                    <span className="bg-green-500 text-white px-2 py-1 rounded-md text-xs">Activo</span>
                  </td>
                  <td className="p-2 text-center">
                    <button className="text-gray-600 hover:text-gray-900">➝</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Lado derecho */}
      <div className="w-1/2 lg:w-1/2">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 gap-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Detalles de la tarea</h2>
            <p className="text-xs text-gray-500">Descripción del enfoque del equipo creado.</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 bg-gray-200 py-1 px-3 rounded-3xl">Proyecto asignado</span>
            <button>
              <BsThreeDotsVertical />
            </button>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Título de la tarea</h3>
          <p className="text-xs text-gray-500">Descripción explicativa de la tarea a realizar para el proyecto asignado</p>
        </div>
      </div>
    </div>
  );
};

export default Asignaciones;
