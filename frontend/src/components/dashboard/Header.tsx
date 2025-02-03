// Header.tsx
import { useLocation } from "react-router-dom";
import Foto from "../../assets/image/profile.png"

interface HeaderProps {
  userData: any;
}

export default function Header({ userData }: HeaderProps) {
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
        {/* Foto de perfil */}
        <img
          src={userData?.profilePicture || Foto}  // Imagen de perfil por defecto si no existe
          alt="Imagen de usuario"
          className="h-10 w-10 rounded-full"
        />
        {/* Nombre y rol del usuario */}
        <span className="font-medium">{userData?.name}</span>
        <span className="text-gray-600 text-sm">{userData?.role}</span>
      </div>
    </header>
  );
}
