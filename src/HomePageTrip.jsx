import React from "react";
import {Link} from 'react-router-dom'

function HomePageTrip({dataTravel}) {
    return (
        <>
            <img src={dataTravel.image} alt="trip image" />
                <div className="trip-card__content">
                    <div className="trip-info">
                        <h3 className="trip-info__title">{dataTravel.title}</h3>
                        <div className="trip-info__content">
                            <span className="trip-info__duration"><strong>{dataTravel.duration}</strong> days</span>
                            <span className="trip-info__level">{dataTravel.level}</span>
                        </div>
                    </div>
                    <div className="trip-price">
                        <span>Price</span>
                        <strong className="trip-price__value">{dataTravel.price + `$`}</strong>
                    </div>
                </div>
                <Link to={`/trip/${dataTravel.id}`} className="button">Discover a trip</Link>
        </>
    );
}

export default HomePageTrip;