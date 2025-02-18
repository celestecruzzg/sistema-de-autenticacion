from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.schemas.user import UserCreate, UserResponse, UserLogin
from app.services.user_auth import create_user, authenticate_user
from app.database import get_db
from app.utils.jwt import create_access_token
from app.utils.security import verify_password


router = APIRouter()

# Endpoint de registro
@router.post("/register", response_model=UserResponse)
async def register_user(user_data: UserCreate, db: AsyncSession = Depends(get_db)):
    """
    Endpoint para registrar un nuevo usuario con respuesta de seguridad.
    """
    try:
        # Llamar a la función de servicio para crear el usuario
        new_user = await create_user(user_data, db)
        return new_user
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))



# Endpoint de login
@router.post("/login")
async def login_user(user_data: UserLogin, db: AsyncSession = Depends(get_db)):
    """
    Endpoint para iniciar sesión.
    """
    # Autenticar usuario por email y contraseña
    user = await authenticate_user(user_data.email, user_data.password, db)
    if not user:
        raise HTTPException(status_code=401, detail="Credenciales incorrectas")
    
    # Verificar la respuesta de seguridad
    if not verify_password(user_data.security_answer, user.security_answer):
        raise HTTPException(status_code=401, detail="Respuesta de seguridad incorrecta")
    
    # Generar el token de acceso
    token = create_access_token(data={"sub": user.email, "role": user.role})
    return {
        "access_token": token,
        "token_type": "bearer",
        "user": {
            "name": user.name,
            "last_name": user.last_name,
            "email": user.email,
            "role": user.role
        }
    }
