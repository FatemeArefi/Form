import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ people = [] }) => {
  const skillCounts = people.reduce((acc, person) => {
    person.skills.forEach((skill) => {
      acc[skill] = (acc[skill] || 0) + 1;
    });
    return acc;
  }, {});

  const data = {
    labels: Object.keys(skillCounts),
    datasets: [
      {
        data: Object.values(skillCounts),
        backgroundColor: [
          "#C60026",
          "#ED7779",
          "#F69294",
          "#FBBBBC",
          "#FED7D8",
          "#FFEBEB",
          "#FFEBe1",
        ],
        hoverBackgroundColor: [
          "#C60026",
          "#ED7779",
          "#F69294",
          "#FBBBBC",
          "#FED7D8",
          "#FFEBEB",
        ],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  };

  return (
    <div className="fixed-circle">
      <Pie data={data} options={options} width={200} height={200} />
    </div>
  );
};

export default PieChart;
