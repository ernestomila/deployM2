import React from 'react'
import { useParams } from 'react-router-dom';
import Card from "../components/Card";
import allFetch from "../services/allFetch";

function CityDetail({ cities }) {
    const params = useParams();
    const [city, setCity] = React.useState();

    React.useEffect(() => {
        console.log("No cities", cities);
        allFetch(params.id, setCity, cities);
    }, [cities, setCity]);
    console.log("CityMia:", typeof city);
    return (
        <>
            <div className='showCity'>
                {city === undefined && <div>Cargando...</div>}
                {city === null && <div>Ciudad no encontrada.</div>}
                {city && <div>
                    <Card
                        key={city.id}
                        cityid={city.id}
                        max={city.max}
                        min={city.min}
                        name={city.name}
                        img={city.img}
                    />
                </div>}

            </div>
        </>
    )
}

export default CityDetail
