import React from 'react'
const apiKey = process.env.REACT_APP_APIKEY;

function existCity(data, id) {
    const exits = data.filter(city => city.id === id)
    return exits.length !== 0 ? true : false;
}

function fetchCity(ciudad, setData, data) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
        .then(r => r.json())
        .then((recurso) => {
            console.log(recurso);
            if (recurso.main !== undefined) {
                const ciudad = {
                    min: Math.round(recurso.main.temp_min),
                    max: Math.round(recurso.main.temp_max),
                    img: recurso.weather[0].icon,
                    id: recurso.id,
                    wind: recurso.wind.speed,
                    temp: recurso.main.temp,
                    name: recurso.name,
                    weather: recurso.weather[0].main,
                    clouds: recurso.clouds.all,
                    latitud: recurso.coord.lat,
                    longitud: recurso.coord.lon
                };
                if (!existCity(data, ciudad.id)) {
                    setData(oldCities => [...oldCities, ciudad]);
                } else {
                    alert("La ciudad ya existe!");
                }
            } else {
                alert("Ciudad no encontrada");
            }
        });
}

export default fetchCity
