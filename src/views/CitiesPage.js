import React from 'react';
import Card from '../components/Card.jsx';
import Cards from '../components/Cards.jsx';
import SearchBar from '../components/SearchBar.jsx';
import fetchCoor from '../services/fetchCoor';
import '../App.css';

function CitiesPage({ data, handleOnClose, onSearch }) {
    return (
        <>
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
        </>
    )
}

export default CitiesPage;
