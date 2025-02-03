#Esquema que valida los datos que el frontend envía por medio de un json cuando se registra un usuario

from pydantic import BaseModel, EmailStr, Field, field_validator

from typing import Optional
from datetime import datetime
import html

#Eschema base ahora con sanitización para los datos compartidos entre los dif esquemas
class UserBase(BaseModel):
    name: str = Field(..., max_length=50)
    last_name: str = Field(..., max_length=50)
    email: EmailStr
    role: str = Field(default="employee", pattern="^(admin|employee)$")
    
    #Aquí se sanitizan las cadenas, en este caso los campos name y last_name se les quitan los posibles espacios en blanco
    #innecesarios y se elimina caracteres peligrosos como <, >, &. Esto se hace para evitar ataques XSS
    @field_validator("name", "last_name")
    def sanitize_strings(cls, value: str) -> str:
        return value.strip()

    
class UserCreate(UserBase):
    password: str = Field(..., min_length=1)

#A partit de aquí se definen como deben verse los datos que devuelva el backend al solicitar info de un usuario
class UserResponse(UserBase):
    id: int
    is_verified: bool
    created_at: datetime
    
class UserLogin(BaseModel):
    email: EmailStr
    password: str

    
    #Permite que FastAPI convierta automáticamente los datos de el modelo SQLAlchemy User a este esquema
    #Su uso/función es para que el backend pueda responder con datos sobre el usuario
    class Config:
        from_attributes = True
        
        
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