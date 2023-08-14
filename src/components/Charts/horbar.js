import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels';
function HorBarChart({ chartData,options}) {
  return <Bar data={chartData} options={options} plugins={[ChartDataLabels,]} />;
}


export default HorBarChart;