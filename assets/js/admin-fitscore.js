document.addEventListener("DOMContentLoaded", () => {
  // --- FitScore Modal Logic ---
  const modal = document.getElementById("fitScoreModal");
  const openButtons = document.querySelectorAll(".open-score-modal");
  const closeBtn = document.getElementById("modalCloseBtn");
  const scoreForm = document.getElementById("fitScoreForm");

  // Sliders and Value Displays
  const conditionSlider = document.getElementById("score-condition");
  const ageSlider = document.getElementById("score-age");
  const usageSlider = document.getElementById("score-usage");

  const conditionVal = document.getElementById("condition-val");
  const ageVal = document.getElementById("age-val");
  const usageVal = document.getElementById("usage-val");

  const finalScoreDisplay = document.getElementById("final-fitscore");

  // Function to calculate and update the total score
  function updateFinalScore() {
    const score1 = parseInt(conditionSlider.value) || 0;
    const score2 = parseInt(ageSlider.value) || 0;
    const score3 = parseInt(usageSlider.value) || 0;

    // This calculation is a simplified interpretation of the placeholder logic
    // We just add the points from the sliders
    const totalScore = score1 + score2 + score3;

    finalScoreDisplay.textContent = `${totalScore} / 100`;

    // Update slider value displays
    conditionVal.textContent = score1;
    ageVal.textContent = score2;
    usageVal.textContent = score3;
  }

  // --- Modal Controls ---
  const openModal = () => {
    if (modal) modal.style.display = "flex";
    updateFinalScore(); // Calculate score on open
  };
  const closeModal = () => {
    if (modal) modal.style.display = "none";
  };

  openButtons.forEach((btn) => btn.addEventListener("click", openModal));
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // --- Form & Slider Listeners ---
  if (scoreForm) {
    // Add listeners to all sliders
    [conditionSlider, ageSlider, usageSlider].forEach((slider) => {
      if (slider) {
        slider.addEventListener("input", updateFinalScore);
      }
    });

    scoreForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert(
        `FitScore ${finalScoreDisplay.textContent} saved! Product is now listed. (Demo)`
      );
      closeModal();
    });
  }
});
