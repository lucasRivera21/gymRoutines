from fastapi import FastAPI
from routes import users, weights, routines, exercise_user, exercise
from sqlalchemy.orm import Session
from db import SessionLocal, engine, Base

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(users.user)
app.include_router(weights.weight)
app.include_router(routines.routine)
app.include_router(exercise_user.exercise_user)
app.include_router(exercise.exercise)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
