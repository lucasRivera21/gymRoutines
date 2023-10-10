from datetime import datetime
from pydantic import BaseModel
from typing import List


class WeightBase(BaseModel):
    weight: int
    magnitude: str


class WeightUpdate(WeightBase):
    id: str


class WeightCreate(WeightBase):
    pass


class Weight(WeightBase):
    id: str
    user_id: int

    class Config:
        orm_mode = True
