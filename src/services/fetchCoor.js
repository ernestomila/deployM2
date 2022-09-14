import React from 'react'
import allFetch from './allFetch'

function fetchCoor(lat, lon, setData, data) {
    allFetch([lat, lon], setData, data);
}

export default fetchCoor
