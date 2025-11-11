document.addEventListener("DOMContentLoaded", () => {
  // --- Get Modal Elements ---
  const modal = document.getElementById("customizeModal");
  if (!modal) return; // Stop if modal isn't on this page

  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalCancelBtn = document.getElementById("modalCancelBtn");
  const openModalButtons = document.querySelectorAll(".open-customize-modal");

  // Preview elements
  const previewImg = document.getElementById("modal-preview-img");
  const previewText = document.getElementById("modal-preview-text");
  const modalItemName = document.getElementById("modal-item-name");

  // Option elements
  const textInput = document.getElementById("engrave-text-input");
  const fontSelector = document.getElementById("fontSelector");

  // Price elements
  const basePriceEl = document.getElementById("modal-base-price");
  const feeEl = document.getElementById("modal-fee");
  const totalEl = document.getElementById("modal-total");

  let currentFee = 5.0; // Default engraving fee
  let currentBasePrice = 0;

  // --- Function to Open Modal ---
  function openModal(e) {
    // Get data from the button
    const button = e.currentTarget;
    const name = button.getAttribute("data-name");
    const price = parseFloat(button.getAttribute("data-price")).toFixed(2);
    const img = button.getAttribute("data-img");

    currentBasePrice = parseFloat(price);

    // Populate modal content
    modalItemName.textContent = `Customize your ${name}`;
    previewImg.src = img;
    basePriceEl.textContent = `$${price}`;

    updateTotal();

    // Show modal
    modal.style.display = "flex";
  }

  // --- Function to Close Modal ---
  function closeModal() {
    modal.style.display = "none";
  }

  // --- Function to Update Total Price ---
  function updateTotal() {
    const total = currentBasePrice + currentFee;
    totalEl.textContent = `$${total.toFixed(2)}`;
  }

  // --- Event Listeners ---

  // Open modal
  openModalButtons.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  // Close modal (X button and Cancel button)
  modalCloseBtn.addEventListener("click", closeModal);
  modalCancelBtn.addEventListener("click", closeModal);

  // Live text preview
  textInput.addEventListener("input", (e) => {
    previewText.textContent = e.target.value;
  });

  // Font selection
  fontSelector.addEventListener("click", (e) => {
    const targetFont = e.target.closest(".font-option");
    if (!targetFont) return;

    // Remove active from all
    fontSelector
      .querySelectorAll(".font-option")
      .forEach((opt) => opt.classList.remove("active"));

    // Add active to clicked
    targetFont.classList.add("active");

    // Update preview font
    previewText.style.fontFamily = targetFont.getAttribute("data-font");
  });
});
