from fastapi import FastAPI
from routes import users, weights
from sqlalchemy.orm import Session
from db import SessionLocal, engine, Base

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(users.user)
app.include_router(weights.weight)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
