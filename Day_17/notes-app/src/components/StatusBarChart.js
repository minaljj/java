import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function StatusBarChart({ notes }) {
  const createdCount = notes.filter(
    (n) => n.status === "created"
  ).length;

  const completedCount = notes.filter(
    (n) => n.status === "completed"
  ).length;

  const data = {
    labels: ["Created", "Completed"],
    datasets: [
      {
        label: "Tasks",
        data: [createdCount, completedCount],
        backgroundColor: ["#66b5cb", "#22c55e"],
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0, 
        },
      },
    },
  };

  return (
    <div style={{ maxWidth: "500px", margin: "20px auto" }}>
      <h3 style={{ textAlign: "center" }}>Task Status Overview</h3>
      <Bar data={data} options={options} />
    </div>
  );
}

export default StatusBarChart;
