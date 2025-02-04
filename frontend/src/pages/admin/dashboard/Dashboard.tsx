// Dashboard.tsx
import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Sidebar from "../../../components/dashboard/Sidebar";
import Header from "../../../components/dashboard/Header";

export default function Dashboard() {
  const [userData, setUserData] = useState<any>(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (!userData) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="flex h-screen bg-gray-200">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header userData={userData} />
        <main className="flex-1 p-10">
          <div className="max-h-screen rounded bg-white p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
