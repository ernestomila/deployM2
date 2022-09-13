import React from 'react';
import Temp from './Temp';
import cardStyle from './Card.module.css';

export default function Card(props) {
  // acá va tu código
  return (
    <>
      <div className="card">
        <div className="btn btn-danger" onClick={props.onClose}>X</div>
        <div>
          <h5 className="card-title">{props.name}</h5>
          <section className={cardStyle.sectionCard}>
            <Temp label="Min" temp={props.min}/>
            <Temp label="Max" temp={props.max}/>
            <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Icono del clima" title="Icono del clima"/>
          </section>
          
        </div>
      </div>
    </>  
  )
};