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
import "./Graph.scss";

const GraphSmall = props => {
  const { filteredData } = props;
  return (
    <div className="graph-container-s">
      <div className="graph-s">
        <div className="graphbg-s">
          <h1 className="subtitle-s">Todays data*</h1>
          <BarChart width={300} height={220} data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="code" />
            <YAxis type="number" domain={[0, 8000]} />
            <Tooltip />
            <Legend wrapperStyle={{ position: "relative" }} />
            <Bar
              dataKey="todayConfirmed"
              fill="#1b78e3"
              name="Confirmed cases"
            />
            <Bar dataKey="todayDeaths" fill="#e31b1b" name="Deaths " />
          </BarChart>
        </div>
      </div>
      <div className="graph-s">
        <div className="graphbg-s">
          {" "}
          <h1 className="subtitle-s">Total cases and recovered</h1>
          <BarChart width={300} height={220} data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="code" />
            <YAxis type="number" domain={[0, 800000]} />
            <Tooltip />
            <Legend wrapperStyle={{ position: "relative" }} />
            <Bar
              dataKey="totalConfirmed"
              name="Confirmed cases"
              fill="#1b78e3"
            />
            <Bar
              dataKey="totalRecovered"
              name="Number of recovered"
              fill="#82ca9d"
            />
          </BarChart>
        </div>
      </div>
      <div className="graph-s">
        <div className="graphbg-s">
          <h1 className="subtitle-s">Number of cases per 1.000.000* </h1>
          <BarChart width={300} height={200} data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="code" />
            <YAxis type="number" domain={[0, 400]} />
            <Tooltip />
            <Legend wrapperStyle={{ position: "relative" }} />
            <Bar dataKey="perMillion" fill="#1b78e3" name="Cases per 1M" />
          </BarChart>
        </div>
      </div>
      <div className="graph-s">
        <div className="graphbg-s">
          <h1 className="subtitle-s">Total Deaths</h1>
          <BarChart width={300} height={220} data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="code" />
            <YAxis type="number" domain={[0, 8000]} />
            <Tooltip />
            <Legend wrapperStyle={{ position: "relative" }} />
            <Bar dataKey="totalDeaths" fill="#e31b1b" name="Total deaths" />
          </BarChart>
        </div>
      </div>
      <div className="graph-s">
        <div className="graphbg-s">
          <h1 className="subtitle-s">Death rate in %</h1>
          <BarChart width={300} height={220} data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="code" />
            <YAxis type="number" domain={[0, 5]} />
            <Tooltip />
            <Legend wrapperStyle={{ position: "relative" }} />
            <Bar dataKey="deathRate" fill="#e31b1b" name="Death rate in %" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default GraphSmall;
