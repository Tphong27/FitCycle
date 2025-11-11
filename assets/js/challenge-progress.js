document.addEventListener("DOMContentLoaded", () => {
  // --- Log Activity Modal Logic ---
  const modal = document.getElementById("logActivityModal");
  const openBtn = document.getElementById("logActivityBtn");
  const closeBtn = document.getElementById("modalCloseBtn");
  const logForm = document.getElementById("logActivityForm");

  const openModal = () => {
    if (modal) modal.style.display = "flex";
  };
  const closeModal = () => {
    if (modal) modal.style.display = "none";
  };

  if (openBtn) openBtn.addEventListener("click", openModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  // Close modal when clicking overlay
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Handle form submission (demo)
  if (logForm) {
    logForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // In a real app, you'd send this data to the server
      alert("Activity logged successfully! (Demo)");
      closeModal();
      logForm.reset();
    });
  }
});
