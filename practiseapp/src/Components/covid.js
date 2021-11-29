import React, { useEffect } from "react";

const Covid = () => {
  const getCovidData = async () => {
    try {
      const res = await fetch('https://api.covid19india.org/data.json');
      const actualData = await res.json();
      console.log(actualData.statewise);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <div>
      <h1> o LIVE o</h1>
      <h2>Covid-19 Coronavirus Tracker</h2>

      <ul>
          <li>
              
          </li>
      </ul>
    </div>
  );
};

export default Covid;
