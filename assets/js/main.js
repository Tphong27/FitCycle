// Main JavaScript file for FitCycle

// Initialize core functionality when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeApp();
});

function initializeApp() {
  // Add mobile menu functionality
  const mobileMenu = document.querySelector(".mobile-menu");
  if (mobileMenu) {
    mobileMenu.addEventListener("click", toggleMobileMenu);
  }

  // Initialize AR functionality if available
  if ("xr" in window.navigator) {
    initializeAR();
  }
}

function toggleMobileMenu() {
  const nav = document.querySelector("nav ul");
  nav.classList.toggle("active");
}

function initializeAR() {
  // AR functionality will be implemented here
  console.log("AR features will be available soon");
}

// FitScore calculation (placeholder)
function calculateFitScore(condition, age, usage) {
  // Score from 0-100 based on:
  // - Item condition (0-50 points)
  // - Age of item (0-30 points)
  // - Usage frequency (0-20 points)
  let score = 0;

  // Add condition score (0-50)
  score += Math.min(50, condition * 10);

  // Add age score (0-30)
  score += Math.max(0, 30 - age * 5);

  // Add usage score (0-20)
  score += Math.max(0, 20 - usage * 4);

  return Math.min(100, Math.max(0, score));
}

// AI Recommendation System (placeholder)
function generateRecommendations(userPreferences) {
  // This will be connected to a backend AI service
  console.log("AI recommendations will be implemented soon");
}
