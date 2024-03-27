import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register({
  ArcElement,
  Tooltip,
  Legend,
});

const userData = [
  { location: "USA", users: 500 },
  { location: "UK", users: 300 },
  { location: "Canada", users: 200 },
  { location: "Australia", users: 400 },
];

const DoughnutChart: React.FC = () => {
  const totalUsers = userData.reduce((total, data) => total + data.users, 0);
  const data = {
    labels: userData.map((data) => data.location),
    datasets: [
      {
        data: userData.map((data) => (data.users / totalUsers) * 100),
        backgroundColor: ["#48375D", "#71599E", "#AE6E9A", "#E8B7BD"], // You can add more colors as needed
        hoverBackgroundColor: ["#48375D", "#71599E", "#AE6E9A", "#E8B7BD"],
      },
    ],
  };
  const options: ChartOptions<"doughnut"> = {
    plugins: {
      legend: {
        position: "right", // Place legend at the right side of the chart
        labels: {
          usePointStyle: true, // Use point style for legend items
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    // Type cast tooltip to avoid TypeScript error
    // @ts-ignore
    tooltips: {
      callbacks: {
        label: (
          tooltipItem: { datasetIndex: string | number; value: any },
          data: { datasets: { [x: string]: any } }
        ) => {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const percent = Number(tooltipItem.value).toFixed(2);
          return `${dataset.label}: ${percent}%`;
        },
      },
    },
  };
  return (
    <div className="">
      <div className="w-full text-[#9A4380] justify-between mb-1 items-center">
        <h1 className="text-xl font-semibold">User Locations</h1>
      </div>
      <div className="w-[383px] h-[170px] border border-[#9A4380] rounded-xl flex flex-row">
        <Doughnut
          style={{ position: "relative", width: "250px", height: "170px" }}
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default DoughnutChart;
