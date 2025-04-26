document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    // Simple front-end check (replace this with backend logic later!)
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isAdmin", "true");
      window.location.href = "admin.html";
    } else {
      document.getElementById("error-msg").classList.remove("hidden");
    }
  });
  