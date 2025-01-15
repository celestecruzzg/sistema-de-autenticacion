#Archivo que se encarga de establecer la conexión con la bd remota en AlwaysData y manejar sesiones

from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
import os

# Cargar variables de entorno
load_dotenv()

# URL de conexión a la base de datos
DATABASE_URL = os.getenv("DATABASE_URL")

if not DATABASE_URL:
    raise ValueError("La variable de entorno DATABASE_URL no está configurada. Verifica tu archivo .env.")

# Crear el motor de base de datos asíncrono
engine = create_async_engine(
    DATABASE_URL,
    echo=True,
    pool_pre_ping=True,  
    pool_recycle=3600,   # Tiempo de vida máximo para conexiones en el pool
)
# Configurar el manejador de sesiones
SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine,
    class_=AsyncSession
)

# Dependencia para obtener una sesión de base de datos en los endpoints
async def get_db():
    async with SessionLocal() as session:
        yield session
