document.addEventListener("DOMContentLoaded", () => {
  // --- Toast Notification Logic (for Save Status) ---
  // This is similar to the logic in account.js

  const saveButton = document.getElementById("saveStatusBtn");

  // Create the toast element dynamically (or get from HTML)
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast-notification";
    toast.id = "toast";
    document.body.appendChild(toast);
  }

  if (saveButton) {
    saveButton.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent actual form submission for demo

      const statusSelect = document.getElementById("order-status");
      const newStatus = statusSelect ? statusSelect.value : "updated";

      // 1. Show the toast
      toast.innerHTML = `<i class="fa-solid fa-check-circle"></i> Order status updated to <strong>${newStatus}</strong>!`;
      toast.classList.add("show");

      // 2. Hide the toast after 3 seconds
      setTimeout(() => {
        toast.classList.remove("show");
      }, 3000);
    });
  }
});
