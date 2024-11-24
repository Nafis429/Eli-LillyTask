# Eli Lilly Medicine Tracker

## Project Description

The Eli Lilly Medicine Tracker is a full-stack web application that allows users to manage a list of medicines. Users can view, search, and add new medicines, as well as calculate the average price of all medicines. The application is built with a backend powered by **FastAPI** and a responsive frontend using **HTML**, **CSS** (Tailwind CSS), and **JavaScript**.

## Technologies Used

- **Backend**: FastAPI (Python)
- **Frontend**: HTML, CSS (Tailwind CSS), JavaScript
- **Database**: JSON file (`data.json`), but can be replaced with a real database
- **Tools**: Git, GitHub

## Features

- **Search Medicines**: Search medicines by name.
- **Display Medicines**: Toggle between card and table layouts based on the number of medicines.
- **Add Medicine**: Add new medicines to the list with a name and price.
- **Average Price Calculation**: Dynamically calculate and display the average price of all medicines.
- **Price Highlighting**: Highlight medicines by price (cheap and expensive).
- **Error Handling**: Display user-friendly error messages for issues like adding duplicate medicines.

## How to Run the Project

1. Clone the repository:
   git clone https://github.com/Nafis429/Eli-LillyTask.git
   cd Eli-LillyTask

## Set up the backend:

Navigate to the backend directory:
cd backend

## Create a virtual environment:
python3 -m venv venv
source venv/bin/activate  # For macOS/Linux

## Install dependencies:
pip install -r requirements.txt

## Run the backend server:
python3 -m uvicorn main:app --reload

## View the frontend:
Open the index.html file in your browser to view the frontend.

## Future Improvements
User Authentication: Add authentication to allow users to manage their own medicines.
Persistent Database: Replace the JSON file with a real database like PostgreSQL or MongoDB.
Advanced Search: Implement more advanced filtering and sorting options for medicines.
Dark Mode: Implement a dark mode for better user experience.
React: Refactor the frontend with React for better maintainability, performance, and scalability.