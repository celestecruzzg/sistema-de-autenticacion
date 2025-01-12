from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from app.database import get_db
from app.utils.security import get_current_user

router = APIRouter()

@router.get("/dashboard")
async def get_dashboard(user=Depends(get_current_user)):
    """
    Endpoint protegido del dashboard. Solo accesible para usuarios autenticados.
    """
    return {
        "message": f"Bienvenido al dashboard, {user['name']}!",
        "user": user,
    }
