import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels';
function DoughnutChart({ chartData,options}) {
  return <Doughnut data={chartData} options={options} plugins={[ChartDataLabels,]} />;
  
}


export default DoughnutChart;