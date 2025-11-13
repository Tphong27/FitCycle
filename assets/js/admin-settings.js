document.addEventListener("DOMContentLoaded", () => {
  // --- Toast Notification Logic ---
  const saveButton = document.getElementById("saveSettingsBtn");
  const toast = document.getElementById("toast");

  if (saveButton && toast) {
    saveButton.addEventListener("click", (e) => {
      e.preventDefault(); // Ngăn form submit

      // 1. Cập nhật nội dung và HIỂN THỊ toast
      toast.innerHTML = `<i class="fa-solid fa-check-circle"></i> Settings saved successfully!`;
      toast.classList.add("show");

      // 2. TỰ ĐỘNG ẨN sau 3 giây
      setTimeout(() => {
        toast.classList.remove("show");
      }, 3000);
    });
  }

  // --- Maintenance Mode Toggle Text ---
  const toggle = document.getElementById("maintenance-mode");
  const statusText = document.getElementById("maintenance-status");

  if (toggle && statusText) {
    // Function to update text
    const updateText = () => {
      if (toggle.checked) {
        statusText.textContent = "Site is currently in Maintenance Mode.";
        statusText.style.color = "var(--badge-red)";
      } else {
        statusText.textContent = "Site is currently Online.";
        statusText.style.color = "var(--primary-dark)";
      }
    };

    // Run on page load
    updateText();

    // Run on change
    toggle.addEventListener("change", updateText);
  }
});
