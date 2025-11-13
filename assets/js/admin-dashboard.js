document.addEventListener("DOMContentLoaded", () => {
  // --- Admin Revenue Chart (Demo) ---
  const revenueChartCanvas = document.getElementById("adminRevenueChart");
  if (revenueChartCanvas) {
    const revenueData = {
      labels: [
        "Oct 12",
        "Oct 15",
        "Oct 18",
        "Oct 21",
        "Oct 24",
        "Oct 27",
        "Oct 30",
        "Nov 02",
        "Nov 05",
        "Nov 08",
      ],
      datasets: [
        {
          label: "Sales (Purchase)",
          data: [1500, 1800, 2200, 2000, 2500, 2300, 2800, 2700, 3200, 3100],
          borderColor: "rgba(16, 185, 129, 1)", // Green
          backgroundColor: "rgba(16, 185, 129, 0.1)",
          fill: true,
          tension: 0.4,
        },
        {
          label: "Rentals (Subscription)",
          data: [800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700],
          borderColor: "rgba(67, 56, 202, 1)", // Indigo
          backgroundColor: "rgba(67, 56, 202, 0.1)",
          fill: true,
          tension: 0.4,
        },
      ],
    };

    new Chart(revenueChartCanvas, {
      type: "line",
      data: revenueData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value) {
                return "$" + value;
              },
            },
          },
        },
        plugins: {
          legend: {
            position: "top",
          },
        },
      },
    });
  }

  // --- New User Signups Chart (Demo) ---
  const userChartCanvas = document.getElementById("adminUserChart");
  if (userChartCanvas) {
    const userData = {
      labels: ["June", "July", "August", "September", "October", "November"],
      datasets: [
        {
          label: "New Users",
          data: [450, 520, 600, 710, 805, 852],
          backgroundColor: "rgba(219, 39, 119, 0.8)", // Pink
          borderColor: "rgba(219, 39, 119, 1)",
          borderWidth: 1,
          borderRadius: 5,
        },
      ],
    };

    new Chart(userChartCanvas, {
      type: "bar",
      data: userData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }
});
