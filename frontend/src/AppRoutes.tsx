import { Navigate, RouteObject } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Register from "./pages/auth/register/Register";
import ProtectedRoute from "./components/login/ProtectedRoute";
import Home from "./components/dashboard/Home";
import Configuracion from "./components/dashboard/Configuracion";
import Resources from "./components/dashboard/Resources";
import Proyectos from './pages/proyectos/Proyectos';
import Equipos from "./pages/equipos/Equipos";
import ProyectoDetalle from "./pages/proyectos/ProyectoDetalle"; // Importamos la nueva vista

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
      <ProtectedRoute>
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
        path: "proyectos/:id", // Agregamos la ruta para ver los detalles del proyecto
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
];

export default appRoutes;
