document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("rform").addEventListener("submit", async function (event) {
        event.preventDefault(); // Stop the form from reloading the page

        const appointmentData = {
            name: document.getElementById("rname").value,
            phone: document.getElementById("rphone").value,
            date: document.getElementById("rdate").value,
            time: document.getElementById("rparty-size").value, // Matches your form field
            gender: document.getElementById("gender").value,
            address: document.getElementById("raddress").value,
        };

        try {
            const backendURL = "https://taqwa-cups-backend.onrender.com";

            // 🔹 Call the API directly, without a separate function
            const response = await fetch(`${backendURL}/api/appointments`, { 
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(appointmentData)
            });

            if (response.ok) {
                alert("✅ Appointment successfully booked!"); // Show success alert
                this.reset(); // Reset form after submission
                fetchAppointments(); // Refresh appointment list
                generateReceipt(appointmentData); // Generate and download PDF
            } else {
                alert("❌ Booking failed! Please try again.");
            }
        } catch (error) {
            alert("❌ Error connecting to server!");
            console.error(error);
        }
    });
});
