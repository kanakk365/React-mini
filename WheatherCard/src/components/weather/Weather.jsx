import Search from "../search/Search";
import { useEffect, useState } from "react";

export default function Weather() {
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchData(name) {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=0a885ddcea2ed9e3c0ff82a1faee4628`
      );
      const data = await res.json();

      if (data) {
        setWeatherData(data);
      }
      console.log(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }
  useEffect(()=>{
    fetchData("Sikar")
  },[])

  async function handleChange() {
    fetchData(search);
  }
  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  }
  return (
    <div className="container">
      <Search
        search={search}
        setSearch={setSearch}
        handleChange={handleChange}
      />
      {
        loading ? <div> Loading...</div> :
        <div>
          <div className="city-name">
            <h2> {weatherData?.name} , <span>{weatherData?.sys?.country}</span></h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          
        </div>
      }
      <div>
        
      </div>
    </div>
  );
}
