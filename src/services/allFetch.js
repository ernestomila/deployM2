import React from 'react';
const apiKey = process.env.REACT_APP_APIKEY;

function existCity(data, id) {
    const exits = data.filter(city => city.id === id)
    return exits.length !== 0 ? true : false;
}

function getAllFetch(byWhat, setData, data) {

    let fetchInfo = "";
    if (Array.isArray(byWhat)) {
        console.log('Por lat & Long');
        fetchInfo = "https://api.openweathermap.org/data/2.5/weather?lat=" + byWhat[0] + "&lon=" + byWhat[1] + "&appid=" + apiKey + "&units=metric";
    } else if (isNaN(byWhat) === true) {
        console.log('Ciudad');
        fetchInfo = "https://api.openweathermap.org/data/2.5/weather?q=" + byWhat + "&appid=" + apiKey + "&units=metric";
    } else if (isNaN(byWhat) === false) {
        console.log('PorID');
        fetchInfo = "https://api.openweathermap.org/data/2.5/weather?id=" + byWhat + "&appid=" + apiKey + "&units=metric";
    }

    console.log("fetchInfo: ", fetchInfo);
    fetch(fetchInfo)
        .then(r => r.json())
        .then((recurso) => {
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
                console.log("La Ciudad:", ciudad);
                if (!existCity(data, ciudad.id) && isNaN(byWhat)) {
                    console.log("Agregué la ciudad");
                    setData(oldCities => [...oldCities, ciudad]);
                } else {
                    console.log("SI HAYY:",);
                    setData(ciudad);
                }
            } else {
                alert("Ciudad no encontrada");
                return null;
            }
        });
}

export default getAllFetch;

