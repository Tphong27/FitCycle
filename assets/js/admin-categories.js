document.addEventListener("DOMContentLoaded", () => {
  // --- Edit Category Modal Logic ---
  const modal = document.getElementById("editCategoryModal");
  const openButtons = document.querySelectorAll(".open-edit-modal");
  const closeBtn = document.getElementById("modalCloseBtn");
  const cancelBtn = document.getElementById("modalCancelBtn");
  const editForm = document.getElementById("editCategoryForm");

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
      alert("Category updated successfully! (Demo)");
      closeModal();
    });
  }

  // Handle add new category (demo)
  const addForm = document.getElementById("addCategoryForm");
  if (addForm) {
    addForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Category added successfully! (Demo)");
      addForm.reset();
    });
  }
});
