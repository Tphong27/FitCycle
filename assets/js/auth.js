document.addEventListener("DOMContentLoaded", () => {
  // --- Password Toggle Functionality ---
  const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("password");

  if (togglePassword && passwordInput) {
    togglePassword.addEventListener("click", () => {
      // Check the type of the password input
      const type =
        passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);

      // Toggle the icon class
      if (type === "password") {
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
      } else {
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
      }
    });
  }

  // --- Validation Error Demo ---
  // This is a simple demo to show the error messages as requested.
  // In a real app, this logic would be more complex.
  const signInForm = document.getElementById("signInForm");
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");

  if (signInForm) {
    signInForm.addEventListener("submit", (e) => {
      // Prevent actual form submission for demo
      e.preventDefault();

      let hasError = false;

      // Simple email validation demo
      if (!emailInput.value.includes("@") || emailInput.value.length < 5) {
        emailInput.classList.add("is-invalid");
        emailError.style.display = "block";
        hasError = true;
      } else {
        emailInput.classList.remove("is-invalid");
        emailError.style.display = "none";
      }

      // Simple password validation demo
      if (passwordInput.value.length < 8) {
        passwordInput.classList.add("is-invalid");
        passwordError.style.display = "block";
        hasError = true;
      } else {
        passwordInput.classList.remove("is-invalid");
        passwordError.style.display = "none";
      }

      if (!hasError) {
        // In a real app, you would submit the form here
        alert("Form submitted successfully (demo)!");
        signInForm.reset(); // Clear form after demo submit
      }
    });
  }
});
