/* eslint-disable react/prop-types */
import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from "recharts";

const GraphLarge = props => {
  const { filteredData } = props;
  return (
    <div className="graph-container-l">
      {" "}
      <div className="graph-l">
        <h1>Today&apos;s data* (updates at 3p.m. CET +1)</h1>
        <BarChart width={1200} height={500} data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[0, 6000]} />
          <Tooltip />
          <Legend wrapperStyle={{ position: "relative" }} />
          <Bar dataKey="todayConfirmed" fill="#1b78e3" name="Confirmed cases" />
          <Bar dataKey="todayDeaths" fill="#e31b1b" name="Deaths " />
        </BarChart>
      </div>
      <div className="graph-l">
        <h1>Total cases and recovered</h1>
        <BarChart width={1200} height={500} data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[0, 800000]} />
          <Tooltip />
          <Legend wrapperStyle={{ position: "relative" }} />
          <Bar dataKey="totalConfirmed" name="Confirmed cases" fill="#1b78e3" />
          <Bar
            dataKey="totalRecovered"
            name="Number of recovered"
            fill="#82ca9d"
          />
        </BarChart>
      </div>
      <div className="graph-l">
        <h1>Number of cases per 1.000.000* </h1>
        <BarChart width={1200} height={500} data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[0, 400]} />
          <Tooltip />
          <Legend wrapperStyle={{ position: "relative" }} />
          <Bar dataKey="perMillion" fill="#1b78e3" name="Cases per 1M" />
        </BarChart>
      </div>
      <div className="graph-l">
        <h1>Total Deaths</h1>
        <BarChart width={1200} height={500} data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[0, 8000]} />

          <Tooltip />
          <Legend wrapperStyle={{ position: "relative" }} />
          <Bar dataKey="totalDeaths" fill="#e31b1b" name="Total deaths" />
        </BarChart>
      </div>
      <div className="graph-l">
        <h1>Death rate in %</h1>
        <BarChart width={1200} height={500} data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[0, 5]} />
          <Tooltip />
          <Legend wrapperStyle={{ position: "relative" }} />
          <Bar dataKey="deathRate" fill="#e31b1b" name="Death rate in %" />
        </BarChart>
      </div>
    </div>
  );
};

export default GraphLarge;
