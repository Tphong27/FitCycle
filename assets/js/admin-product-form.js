document.addEventListener("DOMContentLoaded", () => {
  // --- Conditional Field Logic for Product Type ---
  const productTypeSelect = document.getElementById("product-type");
  const fitscoreGroup = document.getElementById("fitscore-group");

  // Also adjust price fields based on type
  const salePriceInput = document.getElementById("product-price");
  const rentalPriceInput = document.getElementById("product-rental-price");

  function toggleFields() {
    const selectedType = productTypeSelect.value;

    // Show/Hide FitScore
    if (selectedType === "SecondHand") {
      fitscoreGroup.style.display = "block";
    } else {
      fitscoreGroup.style.display = "none";
    }

    // Enable/Disable Price Fields
    if (selectedType === "Rental") {
      salePriceInput.disabled = true;
      rentalPriceInput.disabled = false;
    } else {
      // 'New' or 'SecondHand'
      salePriceInput.disabled = false;
      rentalPriceInput.disabled = true;
    }
  }

  if (productTypeSelect) {
    // Run on page load
    toggleFields();
    // Run on change
    productTypeSelect.addEventListener("change", toggleFields);
  }

  // --- Add Specification Row Logic (from vendor.js) ---
  const addSpecBtn = document.getElementById("addSpecBtn");
  const specList = document.getElementById("specList");

  if (addSpecBtn && specList) {
    addSpecBtn.addEventListener("click", () => {
      const newRow = document.createElement("div");
      newRow.className = "form-row";
      newRow.innerHTML = `
                <input type="text" class="form-control" placeholder="Attribute" />
                <input type="text" class="form-control" placeholder="Value" />
            `;
      specList.appendChild(newRow);
    });
  }

  // --- Image Preview Logic (Demo) ---
  const imageUpload = document.getElementById("image-upload");
  const previewGrid = document.getElementById("imagePreviewGrid");

  if (imageUpload && previewGrid) {
    imageUpload.addEventListener("change", (e) => {
      Array.from(e.target.files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const previewDiv = document.createElement("div");
          previewDiv.className = "image-preview";
          previewDiv.innerHTML = `
                        <img src="${event.target.result}" alt="preview" />
                        <button class="delete-img" type="button">&times;</button>
                    `;
          // Add delete functionality
          previewDiv
            .querySelector(".delete-img")
            .addEventListener("click", () => {
              previewDiv.remove();
            });
          previewGrid.appendChild(previewDiv);
        };
        reader.readAsDataURL(file);
      });
    });
  }
});
