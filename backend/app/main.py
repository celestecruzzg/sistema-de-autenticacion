from fastapi import FastAPI
from dotenv import load_dotenv
import os

#Cargar las variables de entorno desde el archivo .env
load_dotenv()

#Crear la instancia de la aplicación
app = FastAPI(
    title="Proyecto sistema de autenticación",
    description="API para registro e inicio de sesión con MYSQL remoto en AlwaysData",
    version="1.0.0"
)

#Verificar la conexión con la base de datos
DATABASE_URL = os.getenv("DATABASE_URL")
if not DATABASE_URL:
    raise ValueError("La variable de entorno DATABASE_URL no está configurada. Verifica si tienes el .env y si lo tienes, verifica que sea correcto")

#Ruta de verificación
@app.get("/")
async def read_root():
    return{
        "message": "Bienvenido al proyecto de sistema de autenticación"
    }

