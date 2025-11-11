document.addEventListener("DOMContentLoaded", () => {
  // --- Checkout Accordion Logic ---
  const steps = document.querySelectorAll(".checkout-step");

  steps.forEach((step) => {
    const summary = step.querySelector("summary");
    summary.addEventListener("click", (e) => {
      e.preventDefault(); // Stop default open/close

      // Close all other steps
      steps.forEach((otherStep) => {
        if (otherStep !== step) {
          otherStep.open = false;
        }
      });

      // Toggle the current step
      step.open = !step.open;
    });
  });

  // --- Payment Method Selection ---
  const paymentOptions = document.querySelectorAll(".payment-option");
  const paymentForms = document.querySelectorAll(".payment-form");

  paymentOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const targetFormId = option.getAttribute("data-payment") + "-form";

      // Deactivate all
      paymentOptions.forEach((opt) => opt.classList.remove("active"));
      paymentForms.forEach((form) => (form.style.display = "none"));

      // Activate clicked
      option.classList.add("active");
      document.getElementById(targetFormId).style.display = "block";
    });
  });

  // --- Address & Shipping Selection (Visual only) ---
  document.querySelector(".checkout-steps").addEventListener("click", (e) => {
    // Find the card that was clicked (Address or Shipping)
    const card = e.target.closest(".address-card, .shipping-option");
    if (!card) return;

    // Get the radio button inside it
    const radio = card.querySelector('input[type="radio"]');
    if (!radio) return;

    // Deactivate all siblings
    const siblings = card.parentElement.querySelectorAll(
      card.tagName === "LABEL" ? ".shipping-option" : ".address-card"
    );
    siblings.forEach((sibling) => sibling.classList.remove("active"));

    // Activate the clicked card and check its radio button
    card.classList.add("active");
    radio.checked = true;
  });
});
