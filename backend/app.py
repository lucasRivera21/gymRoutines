from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from crud import crud_user
import models
from schemas import user_schema, weight_schema
from db import SessionLocal, engine, Base

Base.metadata.create_all(bind=engine)

app = FastAPI()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/users/")
def read_users(db: Session = Depends(get_db)):
    users = crud_user.get_users(db)
    return users


@app.get("/users/{user_id}")
def read_user(user_id: str, db: Session = Depends(get_db)):
    return crud_user.get_user(db=db, user_id=user_id)


@app.post("/users/")
def create_user(user: user_schema.UserCreate, db: Session = Depends(get_db)):
    return crud_user.create_user(db=db, user=user)


@app.put("/users/{user_id}/name")
def update_name(user_id: str, name: str, db: Session = Depends(get_db)):
    return crud_user.update_name(db=db, user_id=user_id, name=name)


@app.put("/users/{user_id}/email")
def update_email(user_id: str, email: str, db: Session = Depends(get_db)):
    return crud_user.update_email(db=db, user_id=user_id, email=email)


@app.put("/users/{user_id}/gender")
def update_gender(user_id: str, gender: str, db: Session = Depends(get_db)):
    return crud_user.update_gender(db=db, user_id=user_id, gender=gender)
