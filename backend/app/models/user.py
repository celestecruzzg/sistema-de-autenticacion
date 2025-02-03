#Modelo SQLAlchemy que refleja la tabla User en la base de datos

from sqlalchemy import Column, Integer, String, Boolean, DateTime, Enum
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()
class User(Base):
    __tablename__ = "User"
    
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(100))
    last_name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False, unique=True, index=True)
    password = Column(String(255), nullable=False)
    is_verified = Column(Boolean, default=False)
    role = Column(Enum('admin','employee', name='role_enum'), nullable=False,default='employee')
    created_at = Column(DateTime, default=datetime.utcnow)
    