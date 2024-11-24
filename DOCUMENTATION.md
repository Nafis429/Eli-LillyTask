## Approach
For this challenge, I started by thoroughly reviewing the provided instructions to ensure I understood the objectives. The key tasks were to create a backend service to manage a list of medicines and a frontend to interact with the API.

Backend Development:
I began by setting up the backend using FastAPI and created the necessary endpoints for retrieving, adding, and deleting medicines. I used a simple JSON file (data.json) as a mock database to store the medicine data.
CORS middleware was configured in FastAPI to enable the frontend (running locally) to access the backend without running into CORS issues.

Frontend Development:
Once the backend endpoints were functional, I moved to the frontend. I utilized HTML, CSS (with Tailwind CSS), and JavaScript. The frontend was designed to be responsive and dynamic, switching between a table layout and card layout depending on the number of medicines.
I used the Fetch API in JavaScript to interact with the backend API, enabling real-time updates for the medicine list and calculations (like the average price).
The UI was designed to be clean and user-friendly with features like dynamic price highlighting and average price calculation.
Error Handling and Features:
I ensured robust error handling for various cases, such as adding duplicate medicines, handling invalid or missing data, and checking for edge cases where prices could be null or missing.
I implemented features such as dynamic price highlighting to categorize medicines into "cheap", "moderate", and "expensive" based on their price, and dynamically calculated and displayed the average price of all medicines.

Technologies Used:
Backend: FastAPI
Frontend: HTML, CSS (Tailwind CSS), JavaScript
API Interaction: Fetch API

## Objectives - Innovative Solutions
1. Responsive Layout & User Experience:
One feature I’m particularly proud of is the dynamic layout switch between the table view and card view based on the number of medicines. This ensures the UI is clean and user-friendly, no matter how many medicines are in the list. This approach is scalable and ensures optimal viewing, whether the list is short or long. For larger datasets, a table view is ideal for structured data display, while cards give a more visual, compact view for smaller datasets.

2. Price Highlighting & Average Calculation:
I implemented a dynamic price highlighting system that categorizes medicines as "cheap" (green), "moderate" (gray), or "expensive" (red). This visual cue allows users to quickly compare the prices of different medicines. Additionally, I calculate and display the average price of all medicines on the sidebar. The average price dynamically updates as new medicines are added, which helps users track changes in pricing trends.

3. Error Handling:
I made sure that adding a duplicate medicine would return a user-friendly error message. This prevents users from adding the same medicine multiple times, which improves the robustness of the system. Additionally, I validated the medicine price to ensure that no invalid data is entered.

## Future Features to Implement:
While several features were successfully implemented, there are a few areas I’d like to improve or add if given more time:

Pagination or Infinite Scroll: Adding pagination or infinite scroll for the medicine list would be particularly beneficial for larger datasets, ensuring that the app performs well regardless of the number of medicines.

User Authentication (JWT): Adding user authentication would allow users to manage their own medicines and have a personalized experience. I could implement JWT-based authentication for secure access to user-specific endpoints.

Persistent Data Storage: Using a real database (like PostgreSQL or MongoDB) instead of a simple JSON file would improve the scalability of the app, ensuring that data is persisted between server restarts.

Improved Error Handling: More comprehensive error handling, such as validation for correct medicine prices (e.g., ensuring it’s a positive number), would make the app more robust.

Dark Mode: Implementing a dark mode toggle using Tailwind’s built-in dark mode support would provide a more personalized experience for users who prefer dark themes.

## Problems Faced
1. CORS Issues:
Initially, the frontend (running on a different port) had trouble communicating with the backend due to CORS (Cross-Origin Resource Sharing) restrictions. I resolved this by configuring the CORS middleware in FastAPI, which allowed the frontend to send requests to the backend without encountering any CORS errors.

2. Data Persistence:
Since I was using a JSON file as the "database" (data.json), any changes made (like adding or deleting medicines) would not persist after the server was restarted. In a production environment, this wouldn’t be sufficient. If I had more time, I would implement a proper database such as PostgreSQL or MongoDB to handle data persistence and ensure scalability.

3. Frontend Layout Complexity:
Creating a responsive layout for both the table and card views was initially challenging. However, after experimenting with Tailwind CSS's grid and flexbox utilities, I was able to design a flexible layout that adjusts automatically based on the number of items. This responsive design works well across different screen sizes.

4. Handling Invalid Data:
Since I was using a mock database (JSON file), some medicines in the dataset had missing or invalid data. I had to ensure that these were properly handled by adding checks before rendering them on the frontend. Medicines with missing names or prices were excluded from the UI to prevent any crashes.

## Evaluation
Overall, I feel confident about the solution I developed. The backend API is functional, and the frontend provides a clean, dynamic, and responsive user interface. Some aspects of the challenge were easier to implement than others:

Backend:
The FastAPI backend was relatively straightforward to set up, with easy-to-implement routes for GET, POST, and DELETE operations. Implementing CORS middleware and handling basic API interactions was smooth and effective.

Frontend:
The frontend layout, particularly the responsive design, took some time to perfect. Getting the dynamic layout switch (between table and card views) working as expected, along with implementing the search and average price calculation, took a bit of iteration. However, Tailwind CSS proved invaluable in making the design process faster and more efficient.

If I had more time, I would focus on:

1. User Authentication:
Implementing authentication would allow users to manage their own medicines and make the app more secure.

2. Persistent Data Storage:
Replacing the mock JSON database with a real database (e.g., PostgreSQL or MongoDB) would provide more reliable and scalable data storage.

3. Dark Mode:
Adding a dark mode toggle would enhance the user experience, especially for users who prefer dark themes. Tailwind CSS has built-in support for dark mode that would allow for easy implementation.

4. Pagination/Infinite Scroll:
Adding pagination or infinite scroll to the medicines list would improve performance for large datasets.

5. Refactoring Frontend with React:
Refactoring the frontend with React would make the code more modular and maintainable. React's component-based structure would help in better handling of the UI state and improving performance.