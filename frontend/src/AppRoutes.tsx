import { RouteObject } from "react-router-dom";
import Login from "./pages/auth/login/Login";

const appRoutes: RouteObject[] = [
  //Ruta principal
  {
    path: '/',
    element: <Login to="/login" replace />
  }
]

export default appRoutes;