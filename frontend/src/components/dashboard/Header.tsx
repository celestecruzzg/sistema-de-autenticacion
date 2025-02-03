import { useLocation } from "react-router-dom";
import Foto from "../../assets/image/profile.png";
import { HeaderProps } from "../../interfaces/HeaderProps";

export default function Header({ userData }: HeaderProps) {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/dashboard":
        return "Dashboard";
      case "/dashboard/proyectos":
        return "Proyectos";
      case `/dashboard/proyectos/1`:
        return "Detalles del proyecto";
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

  const getRoleName = (role: string) => {
    switch (role) {
      case "admin":
        return "Administrador";
      case "employee":
        return "Colaborador";
      default:
        return "Usuario";
    }
  };

  return (
    <header className="flex items-center justify-between bg-gray-100 px-6 py-4 shadow-md">
      <h1 className="text-xl font-semibold">{getTitle()}</h1>
      <div className="flex items-center space-x-4">
        <div className="flex-wrap gap-3">
          {/* Nombre y rol del usuario */}
          <p className="font-medium text-right">{userData?.name} {userData?.last_name}</p>
          <p className="text-gray-600 text-sm text-right">{getRoleName(userData?.role)}</p>
        </div>
        {/* Foto de perfil */}
        <img
          src={userData?.profilePicture || Foto}
          alt="Imagen de usuario"
          className="h-14 w-14 rounded-full"
        />
      </div>
    </header>
  );
}
