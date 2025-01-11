from passlib.context import CryptContext

#Hashear contraseñas usando bcrypt
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_password_hash(password: str) -> str:
    """    
    Hashea una contraseña usando bcrypt
    """
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    """ 
    Verifica si una contraseña en texto plano coincide con el hash almacenado
    """
    return pwd_context.verify(plain_password, hashed_password)