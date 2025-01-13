import { Navigate, RouteObject } from "react-router-dom";
import Login from "./pages/auth/login/Login";

const appRoutes: RouteObject[] = [
  //Ruta principal
  {
    path: '/',
    element: <Navigate to="/login" replace />
  },
  {
    path: '/login',
    element: <Login />
  }
]

export default appRoutes;