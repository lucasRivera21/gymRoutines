from datetime import datetime
from pydantic import BaseModel
from typing import List


class WeightBase(BaseModel):
    weight: int
    magnitude: str
    date: datetime


class WeightUpdate(WeightBase):
    id: str


class WeightCreate(BaseModel):
    pass


class Weight(WeightBase):
    id: str
    user_id: int

    class Config:
        orm_mode = True
