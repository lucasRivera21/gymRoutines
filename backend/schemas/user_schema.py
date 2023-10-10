from pydantic import BaseModel
from . import weight_schema
from uuid import UUID


class NameUpdate(BaseModel):
    name: str


class EmailUpdate(BaseModel):
    email: str


class GenderUpdate(BaseModel):
    gender: str


class PasswordUpdate(BaseModel):
    password: str
    new_password: str


class UserLogin(EmailUpdate):
    password: str


class UserBase(NameUpdate, GenderUpdate, EmailUpdate):
    pass


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id: str
    weights: list[weight_schema.Weight] = []
    is_active: bool

    class Config:
        orm_mode = True
