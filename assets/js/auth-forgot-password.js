document.addEventListener("DOMContentLoaded", () => {
  const forgotForm = document.getElementById("forgotForm");
  const formState = document.getElementById("formState");
  const successState = document.getElementById("successState");
  const submitButton = document.getElementById("submitButton");
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");
  const userEmailDisplay = document.getElementById("userEmailDisplay");
  const resendTimer = document.getElementById("resendTimer");

  if (forgotForm) {
    forgotForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = emailInput.value;

      // Simple validation
      if (!email || !email.includes("@")) {
        emailInput.classList.add("is-invalid");
        emailError.style.display = "block";
        return;
      } else {
        emailInput.classList.remove("is-invalid");
        emailError.style.display = "none";
      }

      // --- Demo Logic (as requested) ---

      // 1. Show loading state on button
      submitButton.classList.add("is-loading");
      submitButton.disabled = true;

      // 2. Wait 2 seconds
      setTimeout(() => {
        // 3. Switch states
        formState.style.display = "none";
        successState.style.display = "block";

        // 4. Set the email in the success message
        userEmailDisplay.textContent = email;

        // 5. Start the countdown
        startCountdown();
      }, 2000); // 2-second delay
    });
  }

  function startCountdown() {
    let seconds = 60;
    resendTimer.textContent = `Resend in ${seconds}s`;
    resendTimer.classList.add("disabled");

    const interval = setInterval(() => {
      seconds--;
      resendTimer.textContent = `Resend in ${seconds}s`;

      if (seconds <= 0) {
        clearInterval(interval);
        resendTimer.textContent = "Resend link";
        resendTimer.classList.remove("disabled");
        // Here you would add a click event to resend, e.g.:
        // resendTimer.addEventListener("click", () => { ... });
      }
    }, 1000);
  }
});
