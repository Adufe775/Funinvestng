// script.js
document.addEventListener("DOMContentLoaded", () => {
  const signupBtn = document.getElementById("signupBtn");

  signupBtn.addEventListener("click", () => {
    const phone = document.getElementById("phone").value;
    const captcha = document.getElementById("captcha").value;
    const password = document.getElementById("password").value;

    if (!phone || !captcha || !password) {
      alert("Please fill all fields.");
      return;
    }

    if (captcha !== "8130") {
      alert("Captcha is incorrect.");
      return;
    }

    // Save data (for demo only, in real apps this goes to a server)
    localStorage.setItem("userPhone", phone);
    localStorage.setItem("userPassword", password);

    // Redirect to dashboard
    window.location.href = "dashboard.html";
  });
});
