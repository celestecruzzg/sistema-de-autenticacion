import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  // Mapear rutas a títulos
  const getTitle = () => {
    switch (location.pathname) {
      case "/dashboard":
        return "Dashboard";
      case "/dashboard/proyectos":
        return "Proyectos";
      case "/dashboard/equipos":
        return "Equipos";
      case "/dashboard/recursos":
        return "Recursos";
      case "/dashboard/configuracion":
        return "Configuración";
      default:
        return "Dashboard";
    }
  };

  return (
    <header className="flex items-center justify-between bg-gray-100 px-6 py-4 shadow-md">
      <h1 className="text-xl font-semibold">{getTitle()}</h1>
      <div className="flex items-center space-x-4">
        <img src="" alt="Imagen de usuario" className="h-10 w-10 rounded-full" />
        <span className="font-medium"></span>
      </div>
    </header>
  );
}
