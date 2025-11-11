document.addEventListener("DOMContentLoaded", () => {
  // --- Dashboard Chart (Demo) ---
  const salesChartCanvas = document.getElementById("salesChart");

  if (salesChartCanvas) {
    // This is demo data. In a real app, you'd fetch this.
    const demoData = {
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
          label: "Revenue",
          data: [500, 620, 800, 750, 900, 850, 1100, 1050, 1300, 1250],
          backgroundColor: "rgba(16, 185, 129, 0.1)",
          borderColor: "rgba(16, 185, 129, 1)",
          borderWidth: 2,
          fill: true,
          tension: 0.4,
        },
      ],
    };

    new Chart(salesChartCanvas, {
      type: "line",
      data: demoData,
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
            display: false,
          },
        },
      },
    });
  }

  // Add mobile sidebar toggle logic here if needed
});
