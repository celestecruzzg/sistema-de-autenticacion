import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../components/dashboard/Sidebar";
import Header from "../../components/dashboard/Header";

export default function Dashboard() {
  const [userData, setUserData] = useState<any>(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        if (!token) {
          navigate("/login");
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
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
