from sqlalchemy.orm import Session

from models import user_model, weight_model
from schemas import user_schema, weight_schema
import hashlib
from uuid import uuid4


def get_users(db: Session):
    return db.query(user_model.User).all()


def create_user(db: Session, user: user_schema.UserCreate):
    password_hashed = hashlib.sha256(user.password.encode()).hexdigest()
    del user.password
    db_user = user_model.User(
        **user.dict(), hashed_password=password_hashed, id=uuid4())
    try:
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        return db_user
    except:
        db.rollback()
        print("Error")


def get_user(db: Session, user_id: str):
    return db.query(user_model.User).filter(user_model.User.id == user_id).first()


def update_name(db: Session, user_id: str, name: str):
    db_user = db.query(user_model.User).filter(
        user_model.User.id == user_id).first()
    db_user.name = name
    try:
        db.commit()
        db.refresh(db_user)
        return db_user
    except:
        db.rollback()
        print("Error")
