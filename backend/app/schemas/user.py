#Esquema que valida los datos que el frontend envía por medio de un json cuando se registra un usuario

from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class UserBase(BaseModel):
    name: str
    last_name: str
    email: EmailStr
    
class UserCreate(UserBase):
    password: str

#A partit de aquí se definen como deben verse los datos que devuelva el backend al solicitar info de un usuario
class UserResponse(UserBase):
    id: int
    is_verified: bool
    created_at: datetime
    
    #Permite que FastAPI convierta automáticamente los datos de el modelo SQLAlchemy User a este esquema
    #Su uso/función es para que el backend pueda responder con datos sobre el usuario
    class Config:
        orm_mode = True
        
        
""" 
Este código es importante porque sin este código suceden las siguientes cosas:

Sin UserCreate no se podrían validar los datos enviados por el cliente al registrar un usuario, 
los datos podrían tenr una estructura incorrecta (Ekemplo correo inválido o contraseña faltante),
esto puede llevar a errores en la bd o problemas de seguridad

Sin UserResponse el backend no podría garantizar que los datos que se devuelven tengan
una estructura adecuada, también podría exponer campos sensibles como las contraseñas en las 
respuestas sino se tiene control sobre los datos devueltos.

Sin orm_mode = True no se podrían convertir directamente los datos de los modelos de SQLALchemy user a un
eschema pydantic UserResponse. por lo que se tendrían que hacer conversiones manuales, esto se traduce en un 
código más largo y propenso a errores.

En resumen el código es importante porque:
-Valida los datos automáticamente
-Estandariza las entradas y salidas
-Evita errores manuales

Será de utilidad en el resto del código porque:
-Validará los datos enviados por el cliente antes de guardarlos en la bd
-Devolverá datos del usuario por medio de UserResponse
-Evita duplicación de código
"""