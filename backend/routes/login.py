from fastapi import APIRouter, Depends
from security import auth
from sqlalchemy.orm import Session
from db import SessionLocal, engine, Base
from schemas import user_schema
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

login = APIRouter(prefix="/login", tags=["auth"])

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@login.post("/", status_code=200, response_model=user_schema.User)
async def login_user(db: Session = Depends(get_db), form_data: OAuth2PasswordRequestForm = Depends()):
    user = auth.login(db, form_data.username, form_data.password)
    return user
