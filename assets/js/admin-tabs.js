document.addEventListener("DOMContentLoaded", () => {
  // --- ADMIN TAB LOGIC (Reusable) ---
  const tabContainer = document.getElementById("adminTabContainer");

  if (tabContainer) {
    const tabButtons = tabContainer.querySelectorAll(".tab-btn");

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-tab");
        const targetContent = document.getElementById(targetId);

        // Deactivate all buttons
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        // Hide all content blocks
        document.querySelectorAll(".admin-tab-content").forEach((content) => {
          content.style.display = "none";
          content.classList.remove("active");
        });

        // Activate the clicked button
        button.classList.add("active");

        // Show the target content
        // In a real app, you'd show the specific tab content.
        // For this demo, we'll just show the 'all' tab if the target doesn't exist.
        if (targetContent) {
          targetContent.style.display = "block";
          targetContent.classList.add("active");
        } else {
          // Fallback to showing the 'all' tab content if others aren't built
          const allContent = document.getElementById("all");
          if (allContent) allContent.style.display = "block";
        }
      });
    });
  }
});
