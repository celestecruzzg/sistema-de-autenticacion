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
import ProyectoDetalle from "./pages/admin/proyectos/ProyectoDetalle"; // Importamos la nueva vista

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
        element: (
          <ProtectedRoute>
          <Proyectos />
        </ProtectedRoute>
      ),
      },
      {
        path: "proyectos/:id",
        element: (
          <ProtectedRoute>
          <ProyectoDetalle />
        </ProtectedRoute>
      ),
      },
      {
        path: "equipos",
        element: (
          <ProtectedRoute>
          <Equipos />
        </ProtectedRoute>
      ),
      },
      {
        path: "recursos",
        element: (
          <ProtectedRoute>
          <Resources />
        </ProtectedRoute>
      ),
      },
      {
        path: "configuracion",
        element: (
          <ProtectedRoute>
          <Configuracion />
        </ProtectedRoute>
      ),
      },
    ],
  },
];

export default appRoutes;
