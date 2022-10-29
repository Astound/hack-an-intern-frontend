import React from "react";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Box  } from "@mui/material";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const LineGraph = () => {
  const [data, setData] = useState({
    labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "Last 10 points",
        data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
        backgroundColor: "yellow",
        borderColor: "green",
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
    ],
  });

  return (
    <Box
      sx={{
        width: "500px",
        height: "500px", 
      }}
    >
      <Line data={data}>
        Hello
      </Line>
    </Box>
  );
};

export default LineGraph;
