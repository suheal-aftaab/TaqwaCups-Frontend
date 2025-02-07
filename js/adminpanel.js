async function fetchAdminAppointments() {
    try {
        const backendURL = "https://taqwa-cups-backend.onrender.com";

        // 🔹 Fetch data from the backend
        const response = await fetch(`${backendURL}/api/appointments`);
        const appointments = await response.json(); // Convert response to JSON

        // 🔹 Get the table element (Ensure this ID exists in your HTML)
        const tableBody = document.getElementById("adminAppointmentsTable");

        if (!appointments || appointments.length === 0) {
            console.log("No appointments found.");
            return;
        }

        tableBody.innerHTML = ""; // Clear previous data

        appointments.forEach(appointment => {
            const row = document.createElement("tr");
            row.classList.add("border-b", "border-gray-600", "hover:bg-gray-800");

            row.innerHTML = `
                <td class="p-3">${appointment.name}</td>
                <td class="p-3">${appointment.phone}</td>
                <td class="p-3">${appointment.date}</td>
                <td class="p-3">${appointment.time}</td>
                <td class="p-3">${appointment.gender}</td>
                <td class="p-3">${appointment.address}</td>
            `;
            tableBody.appendChild(row);
        });

    } catch (error) {
        console.error("❌ Failed to fetch appointments:", error);
    }
}

// 🔹 Run function when page loads
fetchAdminAppointments();
