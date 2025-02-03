from fastapi import FastAPI
from dotenv import load_dotenv
from app.routers import auth
from app.routers import dashboard
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.base import BaseHTTPMiddleware



#Cargar las variables de entorno desde el archivo .env
load_dotenv()

#Crear la instancia de la aplicación
app = FastAPI(
    title="Proyecto sistema de autenticación",
    description="API para registro e inicio de sesión con MYSQL remoto en AlwaysData",
    version="1.0.0"
)

# Registrar el router de autenticación
app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])

#Ruta de verificación
@app.get("/")
async def read_root():
    return{
        "message": "Bienvenido al proyecto de sistema de autenticación"
    }


#Middleware para evitar xss con content-security-policy
class CSPMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request, call_next):
        response = await call_next(request)
        response.headers["Content-Security-Policy"] = (
            "default-src 'self';"
            "script-src 'self';"
            "style-src 'self';"
            "img-src 'self' data:; "
            "object-src 'none';" #Evita que se use <object>
            "frame-ancestors 'none';" #Esto sirve para prevenir clickjackin
            "base-uri 'self';"  # Evita cambiar la base del documento
        )
        return response


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:5174", "http://localhost:5175"], #Solo permitir los origenes nuestros
    allow_credentials=True,
    allow_methods=["*"],  # Permitir todos los métodos HTTP
    allow_headers=["*"],  # Permitir todos los encabezados
)

app.add_middleware(CSPMiddleware)
