document.addEventListener("DOMContentLoaded", () => {
  const wizardSteps = document.querySelectorAll(".wizard-step");
  const progressSteps = document.querySelectorAll(".progress-step");

  const nextStep1 = document.getElementById("next-step-1");
  const prevStep2 = document.getElementById("prev-step-2");
  const nextStep2 = document.getElementById("next-step-2");
  const prevStep3 = document.getElementById("prev-step-3");
  const completeSetup = document.getElementById("complete-setup");

  const skipArLink = document.getElementById("skip-ar-link");
  const arScanSection = document.getElementById("ar-scan-section");
  const manualSizingForm = document.getElementById("manual-sizing-form");

  const avatarUpload = document.getElementById("avatarUpload");
  const avatarPreview = document.getElementById("avatarPreview");

  const interestGrid = document.querySelector(".interest-grid");

  // --- Step Navigation Logic ---
  function showStep(stepNumber) {
    wizardSteps.forEach((step) => {
      step.classList.remove("active");
    });
    document
      .querySelector(`.wizard-step[data-step="${stepNumber}"]`)
      .classList.add("active");

    progressSteps.forEach((step, index) => {
      if (index < stepNumber - 1) {
        step.classList.add("active"); // Mark past steps as active
      } else if (index === stepNumber - 1) {
        step.classList.add("active"); // Mark current step as active
      } else {
        step.classList.remove("active"); // Unmark future steps
      }
    });

    // Special case for success
    if (stepNumber === "success") {
      document.querySelector(".progress-bar").style.display = "none";
    }
  }

  if (nextStep1) nextStep1.addEventListener("click", () => showStep(2));
  if (prevStep2) prevStep2.addEventListener("click", () => showStep(1));
  if (nextStep2) nextStep2.addEventListener("click", () => showStep(3));
  if (prevStep3) prevStep3.addEventListener("click", () => showStep(2));
  if (completeSetup)
    completeSetup.addEventListener("click", () => showStep("success"));

  // --- Step 1: Avatar Upload Preview ---
  if (avatarUpload) {
    avatarUpload.addEventListener("change", function () {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          avatarPreview.style.backgroundImage = `url(${e.target.result})`;
          avatarPreview.classList.add("has-image");
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // --- Step 2: Interest Selection ---
  if (interestGrid) {
    interestGrid.addEventListener("click", (e) => {
      const card = e.target.closest(".interest-card");
      if (card) {
        card.classList.toggle("active");
      }
    });
  }

  // --- Step 3: Skip AR Logic ---
  if (skipArLink) {
    skipArLink.addEventListener("click", (e) => {
      e.preventDefault();
      arScanSection.style.display = "none";
      manualSizingForm.style.display = "block";
    });
  }
});
