import { Navigate, RouteObject } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Register from "./pages/auth/register/Register";
import ProtectedRoute from "./components/login/ProtectedRoute";
import Home from "./components/dashboard/Home";
import Configuracion from "./components/dashboard/Configuracion";
import Resources from "./components/dashboard/Resources";

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
        path: "configuracion",
        element: <Configuracion />,
      },
      {
      path: "recursos",
      element: < Resources/>,
    },

    ],
  },
];

export default appRoutes;
