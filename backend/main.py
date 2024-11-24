from fastapi import FastAPI, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/medicines")
def get_all_medicines():
    """Retrieve all medicines."""
    with open("data.json", "r") as f:
        data = json.load(f)
    valid_medicines = [med for med in data["medicines"] if med.get("name") and med.get("price") is not None]
    return {"medicines": valid_medicines}

@app.post("/create")
def create_medicine(name: str = Form(...), price: float = Form(...)):
    """Add a new medicine."""
    with open("data.json", "r+") as f:
        data = json.load(f)

        # Check if the medicine already exists
        for med in data["medicines"]:
            if med["name"].lower() == name.lower():
                raise HTTPException(status_code=400, detail=f"Medicine '{name}' already exists.")

        # Add the new medicine
        data["medicines"].append({"name": name, "price": price})
        f.seek(0)
        json.dump(data, f, indent=4)
        f.truncate()
    return {"message": f"Medicine '{name}' added successfully"}

@app.delete("/delete")
def delete_medicine(name: str = Form(...)):
    """Delete a medicine by its name."""
    with open("data.json", "r+") as f:
        data = json.load(f)

        # Search and delete the medicine
        for med in data["medicines"]:
            if med["name"].lower() == name.lower():
                data["medicines"].remove(med)
                f.seek(0)
                json.dump(data, f, indent=4)
                f.truncate()
                return {"message": f"Medicine '{name}' deleted successfully"}
        
        raise HTTPException(status_code=404, detail=f"Medicine '{name}' not found")

@app.get("/average-price")
def average_price():
    """Calculate the average price of medicines."""
    with open("data.json", "r") as f:
        data = json.load(f)
    prices = [med["price"] for med in data["medicines"] if med.get("price") is not None]
    if prices:
        avg_price = sum(prices) / len(prices)
        return {"average_price": avg_price}
    return {"message": "No valid prices available"}
