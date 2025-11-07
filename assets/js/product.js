// Show FitScore filter only if "Buy Used" is checked
document.addEventListener("DOMContentLoaded", function () {
  const buyUsed = document.getElementById("buy-used-checkbox");
  const fitscoreGroup = document.querySelector(".fitscore-group");
  if (buyUsed) {
    buyUsed.addEventListener("change", function () {
      fitscoreGroup.style.display = this.checked ? "block" : "none";
    });
  }
  // Price range value update
  const priceRange = document.getElementById("price-range");
  const priceValue = document.getElementById("price-range-value");
  if (priceRange && priceValue) {
    priceRange.addEventListener("input", function () {
      priceValue.textContent =
        this.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "k";
    });
  }
});
