import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Results from './components/Results'


const App = () => {
  const apiUrl = 'https://restcountries.com/v3.1/all';
  const [countries, setContries] = useState([]);
  const [filterCountries, setFilter] = useState([]);
  const weatherApiUrl = process.env.REACT_APP_API_KEY;


  const initCountriesHook = () =>{
    axios.get(apiUrl).then(
      (response) =>{
        const res = response.data;
        setContries(res);
        console.log('Promise fullfilled. Countries info received...');
      }
    );
  };

  useEffect(initCountriesHook,[]);
  // console.log(countries);


  const onFilterChange = (event) =>{
    const changingText = event.target.value;
    console.log(changingText);
    const filtered = countries.filter(country => country.name.common.toUpperCase().indexOf(changingText.toUpperCase()) >= 0);
    console.log('搜索结果', filtered);
    setFilter(filtered);
  };

  const showDetailHandler = (index) =>{
    const newFilter = [filterCountries[index]];
    setFilter(newFilter);
  };

  return (
    <div >
      <Filter onChange={onFilterChange} />
      <Results result={filterCountries} showdetail={showDetailHandler} weatherApi={weatherApiUrl}/>
    </div>
  );
};

export default App;
