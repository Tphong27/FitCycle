document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Conversion Funnel Chart ---
  const funnelChartCanvas = document.getElementById("conversionFunnelChart");
  if (funnelChartCanvas) {
    new Chart(funnelChartCanvas, {
      type: "funnel",
      data: {
        labels: ["Visitors", "Viewed Product", "Added to Cart", "Purchased"],
        datasets: [
          {
            label: "Users",
            data: [112890, 45000, 9500, 4280], // Demo data
            backgroundColor: [
              "rgba(16, 185, 129, 1)", // primary-color
              "rgba(5, 150, 105, 1)", // primary-dark
              "rgba(67, 56, 202, 1)", // indigo
              "rgba(219, 39, 119, 1)", // pink
            ],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const label = context.label || "";
                const value = context.raw;
                // Calculate percentage from previous step
                if (context.dataIndex > 0) {
                  const prevValue =
                    context.chart.data.datasets[0].data[context.dataIndex - 1];
                  const percentage = ((value / prevValue) * 100).toFixed(1);
                  return `${label}: ${value} users (${percentage}% of previous step)`;
                }
                return `${label}: ${value} users`;
              },
            },
          },
        },
      },
    });
  }

  // --- 2. Revenue Source Chart (Doughnut) ---
  const sourceChartCanvas = document.getElementById("revenueSourceChart");
  if (sourceChartCanvas) {
    new Chart(sourceChartCanvas, {
      type: "doughnut",
      data: {
        labels: [
          "Rentals (Subscription)",
          "New Product Sales",
          "Used Product Sales",
        ],
        datasets: [
          {
            label: "Revenue",
            data: [25000, 15231, 5000], // Demo data
            backgroundColor: [
              "rgba(16, 185, 129, 1)", // primary-color
              "rgba(67, 56, 202, 1)", // indigo
              "rgba(245, 158, 11, 1)", // warning-color
            ],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    });
  }
});
