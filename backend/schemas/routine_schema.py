from pydantic import BaseModel


class RoutineBase(BaseModel):
    name: str


class RoutineCreate(RoutineBase):
    pass


class RoutineUpdate(RoutineBase):
    pass


class Routine(RoutineBase):
    id: str
    user_id: str

    class Config:
        orm_mode = True
