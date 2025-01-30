import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Configuracion() {
  const [userData, setUserData] = useState<any>(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        if (!token) {
          navigate("/login"); // Redirigir al login si no hay token
          return;
        }

        const response = await axios.get("http://127.0.0.1:8000/dashboard/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserData(response.data);
      } catch (error: any) {
        if (error.response && error.response.status === 401) {
          setError("No tienes permiso para acceder a esta página. Inicia sesión nuevamente.");
          localStorage.removeItem("accessToken");
          navigate("/login");
        } else {
          setError("Error al cargar los datos del usuario.");
        }
      }
    };

    fetchUserData();
  }, [navigate]);

  if (error) {
    return <div className="text-red-500 text-center mt-10">{error}</div>;
  }

  if (!userData) {
    return <div className="text-3xl font-light text-center mt-20">Cargando datos del usuario...</div>;
  }

  return (
    <div className="bg-gray-200 rounded-xl p-5">
      <div className="bg-gray-200 rounded-xl p-4 w-full">

        <div className="flex items-center py-4 border-b border-gray-400 last:border-b-0">
          <span className="text-gray-800 text-2xl font-light text-left w-1/3">Nombre</span>
          <span className="text-gray-800 text-center w-1/3">{userData.name || "Usuario"}</span>
          <button className="bg-gray-600 text-white py-2 px-4 rounded-full hover:bg-gray-700 ml-auto">Editar</button>
        </div>

        <div className="flex items-center py-4 border-b border-gray-400 last:border-b-0">
          <span className="text-gray-800 text-2xl font-light text-left w-1/3">Correo electrónico</span>
          <span className="text-gray-800 text-center w-1/3">{userData.email || "correo@ejemplo.com"}</span>
          <button className="bg-gray-600 text-white py-2 px-4 rounded-full hover:bg-gray-700 ml-auto">Editar</button>
        </div>

        <div className="flex items-center py-4 border-b border-gray-400 last:border-b-0">
          <span className="text-gray-800 text-2xl font-light text-left w-1/3">Contraseña</span>
          <span className="text-gray-800 text-center w-1/3">*********</span>
          <button className="bg-gray-600 text-white py-2 px-4 rounded-full hover:bg-gray-700 ml-auto">Editar</button>
        </div>

        <div className="flex flex-col items-start py-4 border-b border-gray-400 last:border-b-0 relative">
          <span className="text-gray-800 text-2xl font-light text-left w-full mb-2">Foto de perfil</span>
          <div className="flex items-start gap-2 mt-4 w-full">
            <img
              src={userData.pfp || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"}
              alt="Foto de perfil"
              className="w-32 h-32 rounded-full object-cover p-1"
            />
          </div>
          <button className="bg-gray-600 text-white py-2 px-4 rounded-full hover:bg-gray-700 absolute top-1/2 right-0 transform -translate-y-1/2">
            Editar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Configuracion;
