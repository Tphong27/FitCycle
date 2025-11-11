document.addEventListener("DOMContentLoaded", () => {
  // --- COMMON AUTH ELEMENTS (could be in auth.js) ---
  const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("password");

  if (togglePassword && passwordInput) {
    togglePassword.addEventListener("click", () => {
      const type =
        passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);

      if (type === "password") {
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
      } else {
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
      }
    });
  }

  // --- SIGN UP SPECIFIC ELEMENTS ---
  const signUpForm = document.getElementById("signUpForm");
  const confirmPasswordInput = document.getElementById("confirm-password");
  const confirmError = document.getElementById("confirm-error");
  const termsCheckbox = document.getElementById("terms");
  const termsLabel = document.getElementById("terms-label");
  const signupButton = document.getElementById("signupButton");

  // Password strength elements
  const strengthBar = document.getElementById("strengthBar");
  const strengthText = document.getElementById("strengthText");
  const checkLength = document.getElementById("check-length");
  const checkUppercase = document.getElementById("check-uppercase");
  const checkNumber = document.getElementById("check-number");

  // Validation criteria
  const validations = {
    length: false,
    uppercase: false,
    number: false,
    match: false,
    terms: false,
  };

  // --- 1. PASSWORD STRENGTH & CHECKLIST ---
  if (passwordInput) {
    passwordInput.addEventListener("input", () => {
      const pass = passwordInput.value;
      let score = 0;

      // Check length (8+ chars)
      if (/.{8,}/.test(pass)) {
        validations.length = true;
        checkLength.classList.add("valid");
        score++;
      } else {
        validations.length = false;
        checkLength.classList.remove("valid");
      }

      // Check uppercase (A-Z)
      if (/[A-Z]/.test(pass)) {
        validations.uppercase = true;
        checkUppercase.classList.add("valid");
        score++;
      } else {
        validations.uppercase = false;
        checkUppercase.classList.remove("valid");
      }

      // Check number (0-9)
      if (/[0-9]/.test(pass)) {
        validations.number = true;
        checkNumber.classList.add("valid");
        score++;
      } else {
        validations.number = false;
        checkNumber.classList.remove("valid");
      }

      // Update strength bar & text
      switch (score) {
        case 1:
          strengthBar.className = "strength-bar weak";
          strengthText.textContent = "Weak";
          strengthText.className = "strength-text weak";
          break;
        case 2:
          strengthBar.className = "strength-bar medium";
          strengthText.textContent = "Medium";
          strengthText.className = "strength-text medium";
          break;
        case 3:
          strengthBar.className = "strength-bar strong";
          strengthText.textContent = "Strong";
          strengthText.className = "strength-text strong";
          break;
        default:
          strengthBar.className = "strength-bar";
          strengthText.textContent = "Weak";
          strengthText.className = "strength-text weak";
      }

      // Re-check password match and form validity
      validatePasswordMatch();
      validateForm();
    });
  }

  // --- 2. PASSWORD CONFIRMATION ---
  function validatePasswordMatch() {
    if (
      confirmPasswordInput.value === passwordInput.value &&
      confirmPasswordInput.value.length > 0
    ) {
      validations.match = true;
      confirmPasswordInput.classList.remove("is-invalid");
      confirmError.style.display = "none";
    } else if (confirmPasswordInput.value.length > 0) {
      validations.match = false;
      confirmPasswordInput.classList.add("is-invalid");
      confirmError.style.display = "block";
    } else {
      validations.match = false;
      confirmPasswordInput.classList.remove("is-invalid");
      confirmError.style.display = "none";
    }
  }

  if (confirmPasswordInput) {
    confirmPasswordInput.addEventListener("input", () => {
      validatePasswordMatch();
      validateForm();
    });
  }

  // --- 3. TERMS CHECKBOX ---
  if (termsCheckbox) {
    termsCheckbox.addEventListener("change", () => {
      validations.terms = termsCheckbox.checked;
      if (validations.terms) {
        termsLabel.classList.remove("is-invalid");
      }
      validateForm();
    });
  }

  // --- 4. ENABLE/DISABLE SIGN UP BUTTON ---
  function validateForm() {
    const isFormValid =
      validations.length &&
      validations.uppercase &&
      validations.number &&
      validations.match &&
      validations.terms;

    signupButton.disabled = !isFormValid;
  }

  // --- 5. FORM SUBMISSION (SHOW MODAL) ---
  if (signUpForm) {
    signUpForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Stop form from submitting

      // Final check on all inputs
      validatePasswordMatch();

      // Check other fields (simplified for demo)
      const fullname = document.getElementById("fullname").value;
      const email = document.getElementById("email").value;

      let hasError = false;
      if (fullname === "") {
        document.getElementById("fullname").classList.add("is-invalid");
        document.getElementById("fullname-error").style.display = "block";
        hasError = true;
      }
      if (email === "" || !email.includes("@")) {
        document.getElementById("email").classList.add("is-invalid");
        document.getElementById("email-error").style.display = "block";
        hasError = true;
      }
      if (!validations.terms) {
        termsLabel.classList.add("is-invalid");
        hasError = true;
      }

      // If form is valid and no errors, show modal
      if (!signupButton.disabled && !hasError) {
        const successModal = document.getElementById("successModal");
        if (successModal) {
          successModal.style.display = "flex";
        }
      }
    });
  }
});
