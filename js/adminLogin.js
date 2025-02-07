async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    
    if (response.ok) {
        localStorage.setItem("token", data.token);
        window.location.href = "admin.html"; // Redirect after login
    } else {
        document.getElementById("errorMessage").innerText = data.message;
    }
}
