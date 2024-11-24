## Approach
For this challenge, I started by thoroughly reviewing the provided instructions to understand the objectives. The main tasks were to create a backend service to manage a list of medicines and a frontend to interact with the API.

I approached the tasks in a systematic way:

Backend Development: I began with setting up the backend using FastAPI and created the necessary endpoints for getting, adding, and deleting medicines. I used a simple JSON file (data.json) as a mock database to store medicine information. This helped me focus on implementing the business logic before worrying about a full-fledged database.

Frontend Development: Once the backend endpoints were functional, I moved on to creating the frontend. I utilized HTML, CSS (Tailwind CSS), and JavaScript. The frontend was designed to be responsive, with a layout that switches between a table and a card view depending on the number of medicines. I used JavaScript to interact with the backend API, ensuring real-time updates for the medicine list.

Error Handling and Features: I made sure to handle potential errors gracefully (e.g., checking for duplicate medicines before adding them). I also implemented features like dynamic average price calculation and highlighting medicines based on their price (green for low, red for high).

Throughout the development process, I relied on documentation from FastAPI and Tailwind CSS for guidance, and used the fetch API to make HTTP requests between the frontend and backend.
## Objectives - Innovative Solutions
Responsive Layout & User Experience: One feature I’m particularly proud of is the dynamic layout switch between the table view and card view based on the number of medicines. This ensures the UI is clean and user-friendly, no matter how many medicines are in the list. This approach can easily scale to handle larger datasets.

Price Highlighting & Average Calculation: I took the time to implement a dynamic price highlighting system, which visually categorizes medicines into "cheap," "moderate," and "expensive." This provides users with a quick way to compare medicines. I also calculated the average price of all medicines and displayed it on the sidebar, which dynamically updates as new medicines are added.

Error Handling: I ensured that adding a duplicate medicine would return a user-friendly error message. This feature improves the robustness of the system by preventing users from adding the same medicine multiple times.

Dark Mode (Not implemented, for future work): While dark mode is not included in this version of the app, it is something I planned to add for better user experience. It would be a nice feature to implement later using Tailwind's built-in dark mode support.



## Problems Faced
CORS Issues: One challenge I faced was the CORS (Cross-Origin Resource Sharing) issue, which prevented the frontend from communicating with the backend. I resolved this by configuring the CORS middleware in FastAPI to allow requests from any origin, which is a necessary step when serving APIs to the web.

Data Persistence: Since I used a JSON file for data storage, changes such as adding or deleting medicines wouldn’t persist after the server was restarted. This limited the long-term usability of the application. If I had more time, I would implement a real database like PostgreSQL or MongoDB to ensure data persistence and scalability.

Complexity of Frontend Layout: Initially, I had difficulty creating a flexible, responsive layout for both the table and card views. After some experimentation with Tailwind CSS, I was able to achieve the desired result using its grid and flexbox utilities. The flexibility of Tailwind helped a lot in adjusting the layout depending on the number of items.

Handling Invalid Data: Handling missing or invalid data in the data.json file was a challenge at first. However, I added proper checks when displaying medicines (e.g., skipping any with missing or null prices) to ensure that the UI wouldn’t break.

## Evaluation
Overall, I feel confident about the challenge. The backend API is functional, and the frontend provides a clean and responsive interface. Some parts of the challenge went better than others:

Backend: The backend was relatively straightforward to implement with FastAPI. Setting up endpoints for fetching and adding medicines was smooth, and implementing CORS support was simple.

Frontend: The frontend layout took some time to perfect, especially getting the search functionality and layout switching between the table and cards working as expected. Tailwind CSS made this task easier, but I had to spend some time experimenting with grid systems to ensure it was fully responsive.

If I had more time, I would improve:

User Authentication: Adding authentication would allow users to manage their own medicines. This would make the app more secure and personalized.
Persistent Data Storage: As mentioned earlier, switching from a JSON file to a proper database (like PostgreSQL or MongoDB) would improve data storage, retrieval, and persistence.
Dark Mode: Implementing a dark mode toggle would enhance the user experience, especially for users who prefer dark themes.
Improved Error Handling: Adding more detailed error messages and validations (e.g., price validation to ensure it’s a positive number) would improve the overall robustness of the system.
Refactor the frontend with React for better maintainability, performance, and scalability.