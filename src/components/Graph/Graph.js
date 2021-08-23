import React, { useState } from "react";
import { Line } from "react-chartjs-2";

function Graph() {
  const [data, setData] = useState({
    labels: [1, 2, 3, 4],
    datasets: [
      {
        data: [65, 59, 80, 81],
        fill: true,
        borderColor: "#97BFF9",
        tension: 0.5,
        pointHoverRadius: 8,
        pointHitRadius: 60,
        pointHoverBorderWidth: 4,
        pointHoverBackgroundColor: "#5596f6",
        pointHoverBorderColor: "#fff",
      },
    ],
  });

  return (
    <Line
      data={data}
      options={{
        plugins: {
          legend: { display: false },
          tooltip: {
            // Disable the on-canvas tooltip
            enabled: false,

            external: function (context) {
              // Tooltip Element
              var tooltipEl = document.getElementById("chartjs-tooltip");

              // Create element on first render
              if (!tooltipEl) {
                tooltipEl = document.createElement("div");
                tooltipEl.id = "chartjs-tooltip";
                tooltipEl.innerHTML = "<table></table>";
                document.body.appendChild(tooltipEl);
              }
            },
          },
        },

        maintainAspectRatio: false,
        backgroundColor: "#EEF4FE",
        fill: "smooth",
        interaction: {
          intersect: false,
        },
        radius: 0,

        scales: {
          x: {
            // display: false,
            // ticks: {
            //   backdropPadding: 100
            // }
            grid: {
              display: false,
            },
          },
          y: {
            display: false,
          },
        },
      }}
    />
  );
}

export default Graph;
