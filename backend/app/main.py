from fastapi import FastAPI
from dotenv import load_dotenv

#Cargar las variables de entorno desde el archivo .env
load_dotenv()

#Crear la instancia de la aplicación
app = FastAPI(
    title="Proyecto sistema de autenticación",
    description="API para registro e inicio de sesión con MYSQL remoto en AlwaysData",
    version="1.0.0"
)

#Ruta de verificación
@app.get("/")
async def read_root():
    return{
        "message": "Bienvenido al proyecto de sistema de autenticación"
    }

