async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const backendURL = "https://taqwa-cups-backend.onrender.com";

    async function bookAppointment() {
        const response = await fetch(`${backendURL}/api/appointments`, { 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(appointmentData)
        });
    }
    

    const data = await response.json();
    
    if (response.ok) {
        localStorage.setItem("token", data.token);
        window.location.href = "admin.html"; // Redirect after login
    } else {
        document.getElementById("errorMessage").innerText = data.message;
    }
}
