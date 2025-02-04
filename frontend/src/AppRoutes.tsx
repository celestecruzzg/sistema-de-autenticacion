import { Navigate, RouteObject } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Register from "./pages/auth/register/Register";
import ProtectedRoute from "./components/login/ProtectedRoute";
import Home from "./components/dashboard/Home";
import Configuracion from "./components/dashboard/Configuracion";
import Resources from "./components/dashboard/Resources";
import Proyectos from './pages/admin/proyectos/Proyectos';
import Equipos from "./pages/admin/equipos/Equipos";
import ProyectoDetalle from "./pages/admin/proyectos/ProyectoDetalle";
import Asignaciones from "./pages/employee/Asignaciones";
import DashboardEmployee from "./pages/employee/DashboardEmployee";
import HomeEmployee from "./components/employee/HomeEmployee";

const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute role="admin">
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "proyectos",
        element: <Proyectos />,
      },
      {
        path: "proyectos/:id",
        element: <ProyectoDetalle />,
      },
      {
        path: "equipos",
        element: <Equipos />,
      },
      {
        path: "recursos",
        element: <Resources />,
      },
      {
        path: "configuracion",
        element: <Configuracion />,
      },
    ],
  },
  {
    path: "/inicio", 
    element: (
      <ProtectedRoute role="employee">
        <DashboardEmployee />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "", 
        element: <HomeEmployee /> // Puedes poner cualquier componente que desees mostrar por defecto
      },
      {
        path: "asignaciones",
        element: <Asignaciones />,
      },
      {
        path: "configuracion",
        element: <Configuracion />,
      },
    ],
  }
];

export default appRoutes;
