document.addEventListener("DOMContentLoaded", () => {
  // --- Billing Toggle Logic ---
  const billingToggle = document.getElementById("billingToggle");
  const priceAmounts = document.querySelectorAll(".price-amount");
  const pricePeriods = document.querySelectorAll(".price-period");
  const labels = document.querySelectorAll(".toggle-label");

  if (billingToggle) {
    const toggleInput = billingToggle.querySelector("input");

    billingToggle.addEventListener("click", (e) => {
      // This allows clicking the labels as well
      if (e.target.classList.contains("toggle-label")) {
        toggleInput.checked = e.target.getAttribute("data-period") === "yearly";
      }

      const isYearly = toggleInput.checked;

      // Update prices
      priceAmounts.forEach((priceEl) => {
        const monthlyPrice = priceEl.getAttribute("data-monthly");
        const yearlyPrice = priceEl.getAttribute("data-yearly");

        priceEl.textContent = isYearly ? yearlyPrice : monthlyPrice;
      });

      // Update price periods
      pricePeriods.forEach((periodEl) => {
        periodEl.textContent = isYearly ? "/year" : "/month";
      });

      // Update label styles
      labels.forEach((label) => {
        if (label.getAttribute("data-period") === "yearly" && isYearly) {
          label.classList.add("active");
        } else if (
          label.getAttribute("data-period") === "monthly" &&
          !isYearly
        ) {
          label.classList.add("active");
        } else {
          label.classList.remove("active");
        }
      });
    });
  }

  // --- FAQ Accordion Logic ---
  const faqAccordion = document.getElementById("faqAccordion");

  if (faqAccordion) {
    faqAccordion.addEventListener("click", (e) => {
      const button = e.target.closest(".faq-q");
      if (!button) return; // Exit if clicked elsewhere

      const item = button.parentElement;
      const answer = button.nextElementSibling;

      // Toggle active class on button
      button.classList.toggle("active");

      // Toggle visibility of answer
      if (button.classList.contains("active")) {
        answer.hidden = false;
      } else {
        answer.hidden = true;
      }

      // Optional: Close other open FAQs
      const allItems = faqAccordion.querySelectorAll(".faq-item");
      allItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.querySelector(".faq-q").classList.remove("active");
          otherItem.querySelector(".faq-a").hidden = true;
        }
      });
    });
  }
});
