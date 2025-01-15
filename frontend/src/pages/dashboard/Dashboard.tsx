// src/components/dashboard/Dashboard.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../components/dashboard/Sidebar";
import Header from "../../components/dashboard/Header";
import Card from "../../components/dashboard/Card";

export default function Dashboard() {
  const [userData, setUserData] = useState<any>(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem("accessToken"); // Obtiene el token del localStorage

        if (!token) {
          // Si no hay token, redirigir al login
          navigate("/login");
          return;
        }

        const response = await axios.get("http://127.0.0.1:8000/dashboard/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserData(response.data); // Guardar los datos del usuario en el estado
      } catch (error: any) {
        if (error.response && error.response.status === 401) {
          setError("No tienes permiso para acceder al dashboard. Inicia sesión nuevamente.");
          localStorage.removeItem("accessToken");
          navigate("/login");
        } else {
          setError("Error al cargar los datos del dashboard.");
        }
      }
    };

    fetchDashboardData();
  }, [navigate]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="flex h-screen bg-gray-200">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-10">
          <div className="h-full rounded bg-white p-6">
            {userData ? (
              <>
                <h1 className="text-xl font-semibold mb-4">
                  ¡Bienvenido, {userData.user.name} {userData.user.last_name}!
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                  <Card title="Tarjeta 1" description="Tarjeta 1." />
                  <Card title="Tarjeta 2" description="Tarjeta 2." />
                  <Card title="Tarjeta 3" description="Tarjeta 3." />
                  <Card title="Tarjeta 4" description="Tarjeta 4." />
                  <Card title="Tarjeta 5" description="Tarjeta 5." />
                  <Card title="Tarjeta 6" description="Tarjeta 6." />
                </div>
              </>
            ) : (
              <p>Cargando datos del usuario...</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
