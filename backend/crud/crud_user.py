from sqlalchemy.orm import Session
from fastapi import HTTPException
from models import user_model, weight_model
from schemas import user_schema, weight_schema
import hashlib
from uuid import uuid4

# Get all users


def get_users(db: Session):
    return db.query(user_model.User).all()

# Create a user


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
        raise HTTPException(status_code=409, detail="Email already exists")

# Get a user by id


def get_user(db: Session, user_id: str):
    return db.query(user_model.User).filter(user_model.User.id == user_id).first()

# Update a user's name


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

# Update a user's email


def update_email(db: Session, user_id: str, email: str):
    db_user = db.query(user_model.User).filter(
        user_model.User.id == user_id).first()
    db_user.email = email
    try:
        db.commit()
        db.refresh(db_user)
        return db_user
    except:
        db.rollback()
        print("Error")

# Update a user's gender


def update_gender(db: Session, user_id: str, gender: str):
    db_user = db.query(user_model.User).filter(
        user_model.User.id == user_id).first()
    db_user.gender = gender
    try:
        db.commit()
        db.refresh(db_user)
        return db_user
    except:
        db.rollback()
        print("Error")

# Update a user's password


def update_password(db: Session, user_id: str, password: str, new_password: str):
    db_user = db.query(user_model.User).filter(
        user_model.User.id == user_id).first()
    password_hashed = hashlib.sha256(password.encode()).hexdigest()
    if password_hashed != db_user.hashed_password:
        raise HTTPException(status_code=401, detail="Incorrect password")
    new_password_hashed = hashlib.sha256(new_password.encode()).hexdigest()
    db_user.hashed_password = new_password_hashed
    try:
        db.commit()
        db.refresh(db_user)
        return db_user
    except:
        db.rollback()
        print("Error")
