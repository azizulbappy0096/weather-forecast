import React, { useState } from "react";
import { Line } from "react-chartjs-2";

function Graph() {
  const [data, setData] = useState({
    labels: [1, 2, 3, 4, 5, 6, 7],
    datasets: [
      {
        label: "a",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        borderColor: "#5596F6",
        tension: 0.5,
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
        interaction: {
          intersect: false,
        },
        radius: 0,

        scales: {
          x: {
            display: false,
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
