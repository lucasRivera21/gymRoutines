from pydantic import BaseModel
from typing import List, Dict
from . import weight_schema


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
    weights: List[weight_schema.Weight] = []
    is_active: bool = True

    class Config:
        orm_mode = True
