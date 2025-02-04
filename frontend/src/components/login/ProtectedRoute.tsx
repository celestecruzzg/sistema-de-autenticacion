import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
  role: "admin" | "employee"; // Definimos que puede ser admin o employee
}

export default function ProtectedRoute({
  children,
  role,
}: ProtectedRouteProps) {
  const token = localStorage.getItem("accessToken");
  const userData = localStorage.getItem("user");

  if (!token || !userData) {
    return <Navigate to="/login" replace />;
  }

  const user = JSON.parse(userData);
  const userRole = user.role; // Obtenemos el rol del usuario desde el localStorage

  // Verificamos si el rol del usuario es el esperado
  if (userRole !== role) {
    return <Navigate to="/" replace />;
  }

  return children; // Si el rol coincide, renderiza el contenido
}
