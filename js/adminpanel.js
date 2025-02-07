async function fetchAdminAppointments() {
    try {
        const response = await fetch("http://localhost:5000/api/appointments"); // Fetch from backend
        const appointments = await response.json();
        const tableBody = document.getElementById("adminAppointmentsTable");
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
        console.error("Failed to fetch appointments", error);
    }
}

// Run function when page loads
fetchAdminAppointments();
