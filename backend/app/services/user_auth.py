from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.models.user import User
from app.schemas.user import UserCreate
from app.utils.security import get_password_hash, verify_password

async def create_user(user_data: UserCreate, db: AsyncSession) -> User:
    """
    Crea un nuevo usuario en la base de datos.
    """
    # Verificar si el email ya está registrado
    query = select(User).where(User.email == user_data.email)
    result = await db.execute(query)
    existing_user = result.scalar_one_or_none()

    if existing_user:
        raise ValueError("El correo ya está registrado")

    # Crear un nuevo usuario
    hashed_password = get_password_hash(user_data.password)  # Hashear la contraseña
    new_user = User(
        name=user_data.name,
        last_name=user_data.last_name,
        email=user_data.email,
        password=hashed_password,
        is_verified=False,
        role=user_data.role if user_data.role else "employee",
    )
    db.add(new_user)
    await db.commit()
    await db.refresh(new_user)

    return new_user


async def authenticate_user(email: str, password: str, db: AsyncSession):
    """
    Verifica las credenciales del usuario.
    """
    # Busca al usuario en la base de datos por email
    query = select(User).where(User.email == email)
    result = await db.execute(query)
    user = result.scalar_one_or_none()

    # Si no existe el usuario o la contraseña no coincide, devuelve None
    if not user or not verify_password(password, user.password):
        return None

    # Si las credenciales son válidas, devuelve al usuario
    return user
