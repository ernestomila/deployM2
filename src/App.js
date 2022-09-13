import React from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';
import fetchCity from './services/fetchCity';

// const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [data, setData] = React.useState([]);
  function onSearch(ciudad) {
    if (data.length > 2) {
      alert('No se pueden agregar más ciudades');
    } else {
      fetchCity(ciudad, setData, data);
    }
  }

  function handleOnClose(id) {
    setData(prevData => {
      return prevData.filter(city => city.id !== id)
    })
  }

  return (
    <div className="App">
      <div>
        {data.length > 0 && <Card
          max={data[data.length - 1].max}
          min={data[data.length - 1].min}
          name={data[data.length - 1].name}
          img={data[data.length - 1].img}
        />}
      </div>
      <hr />
      <div>
        <Cards
          cities={data} onClose={handleOnClose}
        />
      </div>
      <hr />
      <div className="searchBarTop">
        <SearchBar
          onSearch={onSearch}
        />
      </div>
    </div>
  );
}
export default App;
