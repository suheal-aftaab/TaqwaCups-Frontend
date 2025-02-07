async function fetchAppointments() {
    try {
        const response = await fetch("http://localhost:5000/api/appointments"); // Fetch data from backend
        const appointments = await response.json();
        const tableBody = document.getElementById("appointmentsTable");
        const section = document.getElementById("appointmentsSection");

        if (appointments.length === 0) {
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
        console.error("Failed to fetch appointments", error);
    }
}

// Run function when page loads
fetchAppointments();
