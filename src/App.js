import React from 'react';
import http from 'http';
import url from 'url';
import fetchCity from './services/fetchCity';
import fetchCoor from './services/fetchCoor';
import CitiesPage from './views/CitiesPage';
import CityDetail from './views/CityDetail';
import { Route, Routes } from 'react-router-dom';



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
  React.useEffect(() => {
    if (navigator.geolocation && window.location.pathname === '/') {
      navigator.geolocation.getCurrentPosition((position) => {
        fetchCoor(position.coords.latitude, position.coords.longitude, setData, data)
      })
    }
  }, []);
  return (
    <>

      <div className="conteinerAll">
        <Routes>
          <Route path="/" extrict element={
            <CitiesPage
              data={data}
              handleOnClose={handleOnClose}
              onSearch={onSearch} />
          } />
          <Route path="/city/:id" extrict
            element={<CityDetail cities={data} setCity={setData} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
