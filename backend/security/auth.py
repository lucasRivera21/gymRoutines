
from sqlalchemy.orm import Session
from fastapi import HTTPException
from models import user_model
from schemas import user_schema
import hashlib


def login(db: Session, email: str, password: str) -> user_schema.User:
    password_hashed = hashlib.sha256(password.encode()).hexdigest()
    db_user = db.query(user_model.User).filter(
        user_model.User.email == email).first()
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    if db_user.hashed_password != password_hashed:
        raise HTTPException(status_code=401, detail="Incorrect password")
    return db_user
