document.addEventListener("DOMContentLoaded", () => {
  // --- Toast Notification Logic ---
  const saveButton = document.getElementById("saveButton");
  const toast = document.getElementById("toast");

  if (saveButton && toast) {
    saveButton.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent actual form submission for demo

      // 1. Show the toast
      toast.classList.add("show");

      // 2. Hide the toast after 3 seconds
      setTimeout(() => {
        toast.classList.remove("show");
      }, 3000);
    });
  }

  // --- Avatar Preview Logic ---
  const avatarUpload = document.getElementById("avatarUpload");
  const avatarPreview = document.getElementById("avatarPreview"); // The <img> tag

  if (avatarUpload && avatarPreview) {
    avatarUpload.addEventListener("change", function () {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          // Set the 'src' attribute of the <img> tag
          avatarPreview.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
  }
});

// ... (code cho toast notification và avatar preview ở trên) ...

// --- RENTAL HISTORY TAB LOGIC ---
const tabContainer = document.querySelector(".rental-tabs");

if (tabContainer) {
  const tabButtons = tabContainer.querySelectorAll(".tab-btn");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Get the target tab ID from data-tab attribute
      const targetId = button.getAttribute("data-tab");
      const targetList = document.getElementById(targetId);

      // Deactivate all buttons and hide all lists
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      document.querySelectorAll(".rental-list").forEach((list) => {
        list.style.display = "none";
      });

      // Activate the clicked button and show the target list
      button.classList.add("active");
      if (targetList) {
        targetList.style.display = "flex"; // Show as flex container
      }
    });
  });
}
// ... (code cho rental history tabs ở trên) ...

// --- REQUEST SWAP PAGE LOGIC ---

// Get elements for swap page
const swapSearchBtn = document.getElementById("swapSearchBtn");
const swapResults = document.getElementById("swapResults");
const swapSearchStep = document.getElementById("swap-search-step");
const swapConfirmStep = document.getElementById("swap-confirm-step");
const swapSummary = document.getElementById("swapSummary");
const confirmSwapBtn = document.getElementById("confirmSwapBtn");
const changeItemLink = document.getElementById("changeItemLink");
const swapSuccessModal = document.getElementById("swapSuccessModal");

// 1. Show search results (Demo)
if (swapSearchBtn) {
  swapSearchBtn.addEventListener("click", () => {
    swapResults.style.display = "block";
  });
}

// 2. Handle selection from search results
if (swapResults) {
  swapResults.addEventListener("click", (e) => {
    const selectedItem = e.target.closest(".swap-result-item");
    if (!selectedItem) return;

    // Get data from the selected item
    const name = selectedItem.getAttribute("data-name");
    const size = selectedItem.getAttribute("data-size");
    const img = selectedItem.getAttribute("data-img");

    // Populate the confirmation card
    document.getElementById("newItemName").textContent = name;
    document.getElementById("newItemSize").textContent = "Size: " + size;
    document.getElementById("newItemImg").src = img;

    // Show/Hide relevant sections
    swapSearchStep.style.display = "none";
    swapConfirmStep.style.display = "block";
    swapSummary.style.display = "block";
    confirmSwapBtn.disabled = false;
  });
}

// 3. Handle "Change" link
if (changeItemLink) {
  changeItemLink.addEventListener("click", (e) => {
    e.preventDefault();
    // Go back to search state
    swapSearchStep.style.display = "block";
    swapConfirmStep.style.display = "none";
    swapSummary.style.display = "none";
    confirmSwapBtn.disabled = true;
  });
}

// 4. Handle final "Confirm Swap" button
if (confirmSwapBtn) {
  confirmSwapBtn.addEventListener("click", () => {
    // Show success modal
    if (swapSuccessModal) {
      swapSuccessModal.style.display = "flex";
    }
  });
}
