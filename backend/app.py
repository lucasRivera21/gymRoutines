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

# Get all users


@app.get("/users/", status_code=200)
def read_users(db: Session = Depends(get_db)):
    users = crud_user.get_users(db)
    return users

# Get a user by id


@app.get("/users/{user_id}", status_code=200)
def read_user(user_id: str, db: Session = Depends(get_db)):
    return crud_user.get_user(db=db, user_id=user_id)

# Create a user


@app.post("/users/", status_code=201)
def create_user(user: user_schema.UserCreate, db: Session = Depends(get_db)):
    return crud_user.create_user(db=db, user=user)

# Update a user's name


@app.put("/users/{user_id}/name", status_code=200)
def update_name(user_id: str, name: str, db: Session = Depends(get_db)):
    return crud_user.update_name(db=db, user_id=user_id, name=name)

# Update a user's email


@app.put("/users/{user_id}/email", status_code=200)
def update_email(user_id: str, email: str, db: Session = Depends(get_db)):
    return crud_user.update_email(db=db, user_id=user_id, email=email)

# Update a user's gender


@app.put("/users/{user_id}/gender", status_code=200)
def update_gender(user_id: str, gender: str, db: Session = Depends(get_db)):
    return crud_user.update_gender(db=db, user_id=user_id, gender=gender)

# update a user's password


@app.put("/users/{user_id}/password", status_code=200)
def update_password(user_id: str, password: str, new_password: str, db: Session = Depends(get_db)):
    return crud_user.update_password(db=db, user_id=user_id, password=password, new_password=new_password)
