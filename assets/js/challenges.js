document.addEventListener("DOMContentLoaded", () => {
  // --- CHALLENGE TAB LOGIC ---
  const tabContainer = document.querySelector(".challenge-tabs");

  if (tabContainer) {
    const tabButtons = tabContainer.querySelectorAll(".tab-btn");

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-tab");
        const targetList = document.getElementById(targetId);

        // Deactivate all
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        document.querySelectorAll(".challenge-list").forEach((list) => {
          list.classList.remove("active");
          list.style.display = "none";
        });

        // Activate clicked
        button.classList.add("active");
        if (targetList) {
          targetList.classList.add("active");
          targetList.style.display = "block";
        }
      });
    });
  }
});
