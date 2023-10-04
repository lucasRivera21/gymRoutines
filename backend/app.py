from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
import crud
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
    users = crud.get_users(db)
    return users


@app.get("/users/{user_id}")
def read_user(user_id: str, db: Session = Depends(get_db)):
    return crud.get_user(db=db, user_id=user_id)


@app.post("/users/")
def create_user(user: user_schema.UserCreate, db: Session = Depends(get_db)):
    return crud.create_user(db=db, user=user)


@app.put("/users/{user_id}/name")
def update_name(user_id: str, name: str, db: Session = Depends(get_db)):
    return crud.update_name(db=db, user_id=user_id, name=name)
