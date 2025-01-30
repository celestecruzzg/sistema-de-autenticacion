import { FaProjectDiagram, FaUsers, FaCogs } from "react-icons/fa"; 
import { IoHome } from "react-icons/io5"; 
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <aside className="w-64 bg-[var(--color-gray)] text-white flex flex-col justify-between h-screen">
      <div className="p-10">
        <h2 className="text-2xl font-semibold">Gestor de proyectos</h2>

        <button 
          onClick={() => navigate("/dashboard")}
          className="flex items-center space-x-4 rounded hover:bg-gray-600 p-2 w-full mt-4"
        >
          <IoHome size={20} />
          <span>Inicio</span>
        </button>

        <button 
          onClick={() => navigate("/dashboard/proyectos")}
          className="flex items-center space-x-4 rounded hover:bg-gray-600 p-2 w-full mt-4"
        >
          <FaProjectDiagram size={20} />
          <span>Proyectos</span>
        </button>

        <button 
          onClick={() => navigate("/dashboard/equipos")}
          className="flex items-center space-x-4 rounded hover:bg-gray-600 p-2 w-full mt-4"
        >
          <FaUsers size={20} />
          <span>Equipos</span>
        </button>

        <button 
          onClick={() => navigate("/dashboard/recursos")}
          className="flex items-center space-x-4 rounded hover:bg-gray-600 p-2 w-full mt-4"
        >
          <FaUsers size={20} />
          <span>Recursos</span>
        </button>

        <button 
          onClick={() => navigate("/dashboard/configuracion")}
          className="flex items-center space-x-4 rounded hover:bg-gray-600 p-2 w-full mt-4"
        >
          <FaCogs size={20} />
          <span>Configuración</span>
        </button>
      </div>

      <div className="p-10">
        <button
          onClick={handleLogout}
          className="w-full bg-gray-700 text-white py-2 rounded hover:bg-black"
        >
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}
