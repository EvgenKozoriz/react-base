import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Trip() {
    const {tripId} = useParams();
    const [dataTravel, setDataTravel] = useState([])
    
    useEffect(()=> {
        const data = require('./data/travels.json').filter(el => el.id === tripId)
        setDataTravel(data[0])
    }, [])
    console.log(dataTravel)

    return (
        <main className="trip-page">
            <h1 className="visually-hidden">Travel App</h1>
            <div className="trip">
                <img src={dataTravel.image} className="trip__img" alt="trip image" />
                <div className="trip__content">
                <div className="trip-info">
                    <h3 className="trip-info__title">{dataTravel.title}</h3>
                    <div className="trip-info__content">
                    <span className="trip-info__duration"><strong>{dataTravel.duration}</strong> days</span>
                    <span className="trip-info__level">{dataTravel.level}</span>
                    </div>
                </div>
                <div className="trip__description">
                    {dataTravel.description}
                </div>
                <div className="trip-price">
                    <span>Price</span>
                    <strong className="trip-price__value">{dataTravel.price + "$"}</strong>
                </div>
                <button className="trip__button button">Book a trip</button>
                </div>
            </div>
        </main>
    );
}

export default Trip;