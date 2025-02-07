async function fetchAppointments() {
    try {
        const backendURL = "https://taqwa-cups-backend.onrender.com";

        // 🔹 Fetch data from backend
        const response = await fetch(`${backendURL}/api/appointments`);
        const appointments = await response.json(); // 🔹 Convert response to JSON

        // 🔹 Get the section and table elements
        const section = document.getElementById("appointmentsSection"); // Ensure this ID exists in your HTML
        const tableBody = document.getElementById("adminAppointmentsTable"); // Ensure this ID exists in your HTML

        if (!appointments || appointments.length === 0) {
            section.style.display = "none"; // Hide section if no appointments
            return;
        }

        section.style.display = "block"; // Show section if appointments exist
        tableBody.innerHTML = ""; // Clear previous data

        appointments.forEach(appointment => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${appointment.name}</td>
                <td>${appointment.phone}</td>
                <td>${appointment.date}</td>
                <td>${appointment.time}</td>
                <td>${appointment.gender}</td>
                <td>${appointment.address}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error("❌ Failed to fetch appointments:", error);
    }
}

// 🔹 Run function when page loads
fetchAppointments();
