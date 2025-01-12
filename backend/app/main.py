from fastapi import FastAPI
from dotenv import load_dotenv
from app.routers import auth
from app.routers import dashboard

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

