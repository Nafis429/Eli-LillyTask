# Eli Lilly Medicine Tracker

## Project Description

The Eli Lilly Medicine Tracker is a full-stack web application that allows users to manage a list of medicines. Users can view, search, and add new medicines, as well as calculate the average price of all medicines. The application is built with a backend powered by **FastAPI** and a responsive frontend using **HTML**, **CSS** (Tailwind CSS), and **JavaScript**.

## Technologies Used

- **Backend**: FastAPI (Python)
- **Frontend**: HTML, CSS (Tailwind CSS), JavaScript
- **Database**: JSON file (`data.json`), but can be replaced with a real database
- **Tools**: Git, GitHub, VSCode

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
User Authentication: Implement authentication to allow users to manage their own medicines securely.

Persistent Database: Replace the current JSON file with a real database (like PostgreSQL or MongoDB) for better scalability and data persistence.

Advanced Search: Enhance the search functionality by adding filtering and sorting options (e.g., by price range or category).

Dark Mode: Implement a dark mode toggle for a better user experience, especially for those who prefer dark themes.

React Frontend: Refactor the frontend using React to improve maintainability, scalability, and performance.

Pagination/Infinite Scroll: Add pagination or infinite scrolling for handling large datasets efficiently.

Analytics Dashboard: Implement an analytics dashboard to visualize price trends, distribution, and more.
