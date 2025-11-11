document.addEventListener("DOMContentLoaded", () => {
  // --- CART TAB LOGIC ---
  const tabContainer = document.querySelector(".cart-tabs");

  if (tabContainer) {
    const tabButtons = tabContainer.querySelectorAll(".tab-btn");

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-tab");
        const targetList = document.getElementById(targetId);

        // Deactivate all
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        document.querySelectorAll(".cart-list").forEach((list) => {
          list.style.display = "none";
        });

        // Activate clicked
        button.classList.add("active");
        if (targetList) {
          targetList.style.display = "block"; // Show
        }
      });
    });
  }

  // --- QUANTITY STEPPER LOGIC ---
  // Note: This targets all steppers on the page
  document.querySelectorAll(".quantity-stepper").forEach((stepper) => {
    const input = stepper.querySelector("input");
    const plus = stepper.querySelector(".plus");
    const minus = stepper.querySelector(".minus");

    plus.addEventListener("click", () => {
      input.value = parseInt(input.value) + 1;
      // In a real app, you'd call a function here to update the cart totals
      // updateCartTotals();
    });

    minus.addEventListener("click", () => {
      if (input.value > 1) {
        input.value = parseInt(input.value) - 1;
        // updateCartTotals();
      }
    });
  });

  // --- REMOVE ITEM LOGIC (Demo) ---
  document.querySelectorAll(".remove-item-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      if (confirm("Are you sure you want to remove this item?")) {
        e.target.closest(".cart-item").remove();
        // In a real app, you'd call a function here to update the cart totals
        // updateCartTotals();
      }
    });
  });
});
