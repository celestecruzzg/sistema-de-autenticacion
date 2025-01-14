import { FaUserAlt } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <aside className="w-64 bg-[var(--color-gray)] text-white flex flex-col justify-between h-full">
      <div className="p-10">
        <h2 className="text-2xl font-semibold">Sidebar</h2>
        <button className="mt-10 flex items-center space-x-9 rounded hover:bg-gray-600 p-2">
          <span>Inicio</span>
          <IoHome size={20} />
        </button>
        <button className="mt-4 flex items-center space-x-4 rounded hover:bg-gray-600 p-2">
          <span>Usuario</span>
          <FaUserAlt size={20} />
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
