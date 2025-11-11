document.addEventListener("DOMContentLoaded", () => {
  const joinButton = document.getElementById("joinChallengeBtn");
  const successModal = document.getElementById("joinSuccessModal");

  if (joinButton && successModal) {
    joinButton.addEventListener("click", () => {
      // Show the modal
      successModal.style.display = "flex";

      // Optional: Change button text after joining
      joinButton.textContent = "Challenge Joined";
      joinButton.disabled = true;
    });
  }

  // --- Modal Close Logic ---
  // (This logic is also in auth-signup.js,
  //  in a real app, this would be a global modal function)
  if (successModal) {
    // Close if clicked outside the modal content
    successModal.addEventListener("click", (e) => {
      if (e.target === successModal) {
        successModal.style.display = "none";
      }
    });
  }
});
