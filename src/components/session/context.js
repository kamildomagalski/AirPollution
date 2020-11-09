import React, {useState, createContext} from "react";
import citiesDb from "../../db/cities.json";

const SearchContext = createContext(null);

function AirlyDataProvider(props) {
  const [results, setResults] = useState(null)
  const [cities] = useState(citiesDb);
  const [request, setRequest] = useState({
    name: '',
  })
  
  const handleSearchCity = (cityName) => {
    cities.forEach(el => {
      if (el.name === cityName) {
        setRequest(el);
      }
      return el
    })
    
  }
  
  const API = process.env.REACT_APP_API_KEY
  
  const getData = () => {
    fetch(
      `https://airapi.airly.eu/v2/installations/nearest?lat=${request.lat}&lng=${request.lng}&maxDistanceKM=10&maxResults=8`,
      // 'https://airapi.airly.eu/v2/installations/8077',
      // 'https://airapi.airly.eu/v2/measurements/installation?installationId=8077',
      {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          'Accept-Encoding': 'gzip',
          "apikey": API
        }
      })
      .then(response => response.json())
      .then(data => {
        setResults(data);
      })
  }
  return (
    <SearchContext.Provider value={{cities, results, request, handleSearchCity, getData}}>
      {props.children}
    </SearchContext.Provider>
  )
}

export {SearchContext, AirlyDataProvider}