document.addEventListener("DOMContentLoaded", () => {
  // --- ADMIN TAB LOGIC ---
  // (This is copied from admin-tabs.js. In a real app, this would be one shared file)
  const tabContainer = document.getElementById("adminTabContainer");

  if (tabContainer) {
    const tabButtons = tabContainer.querySelectorAll(".tab-btn");

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-tab");
        const targetContent = document.getElementById(targetId);

        // Deactivate all
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        document.querySelectorAll(".admin-tab-content").forEach((content) => {
          content.style.display = "none";
          content.classList.remove("active");
        });

        // Activate clicked
        button.classList.add("active");

        // Show 'all' tab as a demo, since we only have one table
        const allContent = document.getElementById("all");
        if (allContent) allContent.style.display = "block";
      });
    });
  }

  // --- EDIT USER MODAL LOGIC ---
  const modal = document.getElementById("editUserModal");
  const openButtons = document.querySelectorAll(".open-edit-modal");
  const closeBtn = document.getElementById("modalCloseBtn");
  const cancelBtn = document.getElementById("modalCancelBtn");
  const editForm = document.getElementById("editUserForm");

  const openModal = () => {
    if (modal) modal.style.display = "flex";
  };
  const closeModal = () => {
    if (modal) modal.style.display = "none";
  };

  openButtons.forEach((btn) => btn.addEventListener("click", openModal));
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (cancelBtn) cancelBtn.addEventListener("click", closeModal);

  // Close modal when clicking overlay
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Handle form submission (demo)
  if (editForm) {
    editForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("User role updated successfully! (Demo)");
      closeModal();
    });
  }
});
