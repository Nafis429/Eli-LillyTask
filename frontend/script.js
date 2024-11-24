let allMedicines = []; // Store all medicines globally for filtering

document.addEventListener("DOMContentLoaded", () => {
    // Fetch and display medicines
    fetch("http://127.0.0.1:8000/medicines")
        .then(response => response.json())
        .then(data => {
            allMedicines = data.medicines; // Store fetched medicines
            displayMedicines(allMedicines); // Display all medicines on load
            updateAveragePrice(allMedicines);
        })
        .catch(error => console.error("Error fetching medicines:", error));

    // Add search functionality
    const searchBar = document.getElementById("search-bar");
    searchBar.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const filteredMedicines = allMedicines.filter(med =>
            med.name.toLowerCase().includes(query)
        );
        displayMedicines(filteredMedicines); // Update the displayed list
        updateAveragePrice(filteredMedicines); // Update the average price

        // Show or hide the "No medicines found" message
        const noMedicinesMessage = document.getElementById("no-medicines-message");
        if (filteredMedicines.length === 0) {
            noMedicinesMessage.classList.remove("hidden");
        } else {
            noMedicinesMessage.classList.add("hidden");
        }
    });
});

// Function to display medicines
function displayMedicines(medicines) {
    const medicineList = document.getElementById("medicine-list");
    const medicineCards = document.getElementById("medicine-cards");
    const medicineTable = document.getElementById("medicine-table");

    medicineList.innerHTML = ""; // Clear existing data
    medicineCards.innerHTML = ""; // Clear existing data

    // Toggle between card/table layout based on number of medicines
    if (medicines.length > 10) {
        // Show table layout if there are more than 10 medicines
        medicineTable.classList.remove("hidden");
        medicineCards.classList.add("hidden");

        // Add medicines to the table
        medicines.forEach(medicine => {
            if (medicine.name && medicine.price !== null) {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td class="p-4 border-b">${medicine.name}</td>
                    <td class="p-4 border-b text-right ${highlightMedicine(medicine.price)}">$${medicine.price}</td>
                    <td class="p-4 border-b text-right">
                        <button onclick="deleteMedicine('${medicine.name}')"
                            class="text-red-600 hover:text-red-800">Delete</button>
                    </td>
                `;
                medicineList.appendChild(row);
            } else {
                console.warn("Skipping invalid medicine:", medicine);
            }
        });
    } else {
        // Show card layout for fewer than 10 medicines
        medicineCards.classList.remove("hidden");
        medicineTable.classList.add("hidden");

        // Add medicines to the cards
        medicines.forEach(medicine => {
            if (medicine.name && medicine.price !== null) {
                const card = document.createElement("div");
                card.className = `p-4 border rounded-lg shadow-md ${highlightMedicine(medicine.price)}`;
                card.innerHTML = `
                    <h3 class="font-bold text-lg">${medicine.name}</h3>
                    <p class="text-sm text-gray-700 mt-2">Price: $<span>${medicine.price}</span></p>
                    <button onclick="deleteMedicine('${medicine.name}')"
                            class="mt-2 text-red-600 hover:text-red-800">Delete</button>
                `;
                medicineCards.appendChild(card);
            } else {
                console.warn("Skipping invalid medicine:", medicine);
            }
        });
    }
}

// Highlight medicines based on price
function highlightMedicine(price) {
    if (price < 10) return "bg-green-100 text-green-800"; // Cheap
    if (price > 50) return "bg-red-100 text-red-800"; // Expensive
    return "bg-gray-100 text-gray-700"; // Default color for other prices
}

// Function to recalculate and update the average price dynamically
function updateAveragePrice(medicines) {
    let total = 0;
    let count = 0;

    medicines.forEach(medicine => {
        if (medicine.price !== null) {
            total += medicine.price;
            count++;
        }
    });

    const avgPriceSection = document.getElementById("average-price");
    if (count > 0) {
        avgPriceSection.textContent = `Average Price: $${(total / count).toFixed(2)}`;
    } else {
        avgPriceSection.textContent = `Average Price: N/A`;
    }
}

// Add a new medicine and handle duplicate errors
document.getElementById("add-medicine-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("medicine-name").value;
    const price = document.getElementById("medicine-price").value;

    fetch("http://127.0.0.1:8000/create", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ name: name, price: price }),
    })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => {
                    throw new Error(err.detail);
                });
            }
            return response.json();
        })
        .then(data => {
            console.log("Medicine added:", data);

            // Add the new medicine to the global list
            const newMedicine = { name: name, price: parseFloat(price) };
            allMedicines.push(newMedicine);

            // Update the display
            displayMedicines(allMedicines);
            updateAveragePrice(allMedicines);

            // Clear form fields
            document.getElementById("medicine-name").value = "";
            document.getElementById("medicine-price").value = "";
        })
        .catch(error => {
            console.error("Error adding medicine:", error);
            alert(error.message); // Show a user-friendly alert for issues like duplicates
        });
});

// Delete Medicine
function deleteMedicine(name) {
    fetch("http://127.0.0.1:8000/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ name: name }),
    })
    .then(response => {
        if (response.ok) {
            // Remove the deleted medicine from the global list
            allMedicines = allMedicines.filter(med => med.name !== name);

            // Update the display
            displayMedicines(allMedicines);
            updateAveragePrice(allMedicines);
        } else {
            return response.json().then(err => {
                throw new Error(err.detail);
            });
        }
    })
    .catch(error => {
        console.error("Error deleting medicine:", error);
        alert("Error: " + error.message);
    });
}
