import { FaUserAlt } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[var(--color-gray)] text-white">
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
    </aside>
  );
}
