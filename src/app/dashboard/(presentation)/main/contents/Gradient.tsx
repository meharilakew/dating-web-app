import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
  Filler,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

const userData = [
  { day: "Monday", revenue: 5000 },
  { day: "Tuesday", revenue: 2360 },
  { day: "Wednesday", revenue: 2270 },
  { day: "Thursday", revenue: 1830 },
  { day: "Friday", revenue: 1490 },
  { day: "Saturday", revenue: 4100 },
  { day: "Sunday", revenue: 3110 },
];

const GradientLineChart: React.FC = () => {
  const data = {
    labels: userData.map((data) => data.day),
    datasets: [
      {
        data: userData.map((data) => data.revenue),
        borderColor: "#9A4380",
        borderWidth: 3,
        pointBorderColor: "#9A4380",
        pointBorderWidth: 3,
        tension: 0.5,
        fill: true,
        backgroundColor: (context: { chart: { ctx: any } }) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "#9A4380");
          gradient.addColorStop(1, "white");
          return gradient;
        },
        showLine: false,
        pointRadius: 0,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          font: {
            size: 11,
            weight: "bold",
          },
          stepSize: 2000, // Set the step size to 2000
          callback: function (value: any) {
            return value === 0 ? value : value / 1000 + "k"; // Convert values to 'k' format
          },
        },
        min: 0,
        max: 6000,
        grid: {
          display: false, // Hide the gridlines on the y-axis
        },
      },
      x: {
        ticks: {
          font: {
            size: 11,
            weight: "bold",
          },
        },
        grid: {
          display: false, // Hide the gridlines on the y-axis
        },
      },
    },
  };

  return (
    <div className="">
      <h1 className="text-[#9A4380] text-xl font-semibold">Revenue</h1>
      <div className="w-[580px] h-[170px] border border-[#9A4380] rounded-2xl flex justify-center cursor-pointer p-2">
        <Line
          style={{ position: "relative", width: "540px", height: "160px" }}
          data={data}
          options={options}
        ></Line>
      </div>
    </div>
  );
};

export default GradientLineChart;
