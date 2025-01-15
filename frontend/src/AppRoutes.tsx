import { Navigate, RouteObject } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Register from "./pages/auth/register/Register";
import ProtectedRoute from "./components/login/ProtectedRoute";


const appRoutes: RouteObject[] = [
  //Ruta principal
  {
    path: '/',
    element: <Navigate to="/login" replace />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  }
]

export default appRoutes;