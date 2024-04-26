
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== '') {
      onSearch(city);
      setCity('');
    }
  };

  return (
   <div className='search_container'>
     <form onSubmit={handleSubmit} >
      <input type="text" placeholder="Enter city name" value={city} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
   </div>
  );
}

export default SearchBar;
