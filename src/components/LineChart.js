import React from "react";
import { TEChart } from "tw-elements-react";

export default function LineChart() {
  return (
    <TEChart
      type="line"
      data={{
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        datasets: [
          {
            label: "Traffic",
            data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
          },
        ],
      }}
    />
  );
}