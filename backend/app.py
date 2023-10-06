from fastapi import FastAPI
from routes import users
from sqlalchemy.orm import Session
from db import SessionLocal, engine, Base

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(users.user)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
