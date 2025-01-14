// src/components/dashboard/Dashboard.tsx
import Sidebar from "../../components/dashboard/Sidebar";
import Header from "../../components/dashboard/Header";
import Card from "../../components/dashboard/Card";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-200">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-10">
          <div className="h-full rounded bg-white p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
              <Card title="Tarjeta 1" description="Tarjeta 1." />
              <Card title="Tarjeta 2" description="Tarjeta 2." />
              <Card title="Tarjeta 3" description="Tarjeta 3." />
              <Card title="Tarjeta 4" description="Tarjeta 4." />
              <Card title="Tarjeta 5" description="Tarjeta 5." />
              <Card title="Tarjeta 6" description="Tarjeta 6." />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
