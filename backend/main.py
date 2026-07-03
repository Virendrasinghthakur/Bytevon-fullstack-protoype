from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from data import properties

app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/api/properties")
def get_properties():
    return properties
