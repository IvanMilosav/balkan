import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";
import backgroundImg from "./assets/WBalkans.png";
import Graph from "./Graph";
import GraphSmall from "./GraphSmall";
import GraphLarge from "./GraphLarge";
// Graph, GraphSmall, GraphLarge display according to screen size.
// Since rechart graphs requre size before displaying on screen
// they are separated in 3 groups small, regular and large.
const App = () => {
  const [apiData, setApiData] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataError, setDataError] = useState(false);
  const arrayOfFilteredData = [];
  // getting data
  const getData = async () => {
    try {
      const response = await axios.get("https://corona-api.com/countries");
      setApiData(response);
      setLoading(false);
    } catch (error) {
      setDataError(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  // filtering Balkan countires
  useEffect(() => {
    if (apiData != null) {
      const fdata = apiData.data.data;
      fdata.forEach(item => {
        if (
          item.name === "Albania" ||
          item.name === "Bosnia and Herzegovina" ||
          item.name === "Serbia" ||
          item.name === "Montenegro" ||
          item.name === "North Macedonia"
        )
          arrayOfFilteredData.push({
            name: item.name,
            code: item.code,
            todayDeaths: item.today.deaths,
            todayConfirmed: item.today.confirmed,
            totalDeaths: item.latest_data.deaths,
            totalConfirmed: item.latest_data.confirmed,
            totalRecovered: item.latest_data.recovered,
            deathRate: parseFloat(
              item.latest_data.calculated.death_rate.toFixed(3)
            ),
            perMillion: item.latest_data.calculated.cases_per_million_population
          });
      });
      setFilteredData(arrayOfFilteredData);
    }
  }, [apiData]);

  return (
    <>
      <div className="App">
        <div
          className="background"
          style={{ backgroundImage: `url('${backgroundImg}')` }}
        />
        {dataError ? <h1>ERROR</h1> : null}
        <h1 className="title">Western Balkans COVID-19 data</h1>
        {loading ? (
          <div className="loader">Loading...</div>
        ) : (
          <div>
            <Graph filteredData={filteredData} />
            <GraphSmall filteredData={filteredData} />
            <GraphLarge filteredData={filteredData} />
          </div>
        )}
      </div>
      <div className="footer">
        <p className="msg">
          All data is provided by: https://corona-api.com/countries{" "}
        </p>
        <p className="msg">
          0 usually represents lack of data, data updates at 3 p.m. CET +1 *
        </p>
      </div>
    </>
  );
};

export default App;
