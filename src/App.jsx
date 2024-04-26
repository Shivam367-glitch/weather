
import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather  } from './redux/actions';
import WeatherDisplay from './components/WeatherDisplay';
import SearchBar from './components/SearchBar';

function App() {
  const dispatch = useDispatch();
  const weather = useSelector(state => state);


   console.log(weather);
  const handleSearch = (city) => {
    dispatch(fetchWeather(city));
  };

  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App;
