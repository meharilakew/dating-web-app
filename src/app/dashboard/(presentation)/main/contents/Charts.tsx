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
  { day: "Sunday", activeUsers: 2210, paidUsers: 1110 },
  { day: "Monday", activeUsers: 1100, paidUsers: 530 },
  { day: "Tuesday", activeUsers: 1220, paidUsers: 640 },
  { day: "Wednesday", activeUsers: 540, paidUsers: 670 },
  { day: "Thursday", activeUsers: 670, paidUsers: 780 },
  { day: "Friday", activeUsers: 1180, paidUsers: 390 },
  { day: "Saturday", activeUsers: 200, paidUsers: 100 },
];

const LineChart: React.FC = () => {
  const data = {
    labels: userData.map((data) => data.day),
    datasets: [
      {
        label: "Active Users",
        data: userData.map((data) => data.activeUsers),
        borderColor: "#F3C4C2",
        borderWidth: 3,
        pointBorderColor: "#F3C4C2",
        pointBorderWidth: 3,
        tension: 0.5,
        // fill: true,
        pointRadius: 0,
      },
      {
        label: "Paid Users",
        data: userData.map((data) => data.paidUsers),
        borderColor: "#7B63A4",
        borderWidth: 3,
        pointBorderColor: "#7B63A4",
        pointBorderWidth: 3,
        tension: 0.5,
        // fill: true,
        pointRadius: 0,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    plugins: {
      legend: {
        display: true,
        labels: {
          usePointStyle: true, // Use point style for legend items
        },
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
        },
        min: 0,
        max: 2500,
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

  // style={{
  //           width: "800px",
  //           height: "290px",
  //           padding: "20px",
  //           cursor: "pointer",
  //         }}
  return (
    <div className="">
      <h1 className="text-[#9A4380] text-xl font-semibold">
        Active Users and Paid Users
      </h1>
      <div className="w-[580px] h-[250px] border border-[#9A4380] rounded-2xl flex justify-center cursor-pointer">
        <Line
          style={{ position: "relative", width: "560px", height: "160px" }}
          data={data}
          options={options}
        ></Line>
      </div>
    </div>
  );
};

export default LineChart;
