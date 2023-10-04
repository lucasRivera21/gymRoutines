import datetime
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from db import Base
# from .user_model import User


class Weight(Base):
    __tablename__ = "weights"

    id = Column(String, primary_key=True, index=True)
    weight = Column(Integer)
    magnitude = Column(String)
    date = Column(DateTime, default=datetime.datetime.now())
    user_id = Column(String, ForeignKey("users.id"))

    user = relationship("User", back_populates="weights")
