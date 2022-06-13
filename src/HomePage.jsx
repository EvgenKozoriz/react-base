import React, { useEffect, useState } from "react";
import HomePageTrip from "./HomePageTrip";

function HomePage() {

    const [dataTravel, setDataTravel] = useState([])
    const [filteredData, setfilteredData]= useState({'input': '', 'duration': '', 'level': ''})

    useEffect(()=> {
        const data = require('./data/travels.json').map(el => el= {...el, "visible": true})
        setDataTravel(data)
    }, [])
    console.log(dataTravel)
    console.log(filteredData)


    const handleInputChange = (e) =>  {
        setfilteredData(prev => prev = {...prev, input: e.target.value})
    }
    const handleOptionDurationChange = (e) => {
        setfilteredData(prev => prev = {...prev, duration: e.target.value})
    }

    const handleOptionLevelChange = (e) => {
        setfilteredData(prev => prev = {...prev, level: e.target.value})
    }

    return (
        <main>
            <h1 className="visually-hidden">Travel App</h1>
            <section className="trips-filter">
                <h2 className="visually-hidden">Trips filter</h2>
                <form className="trips-filter__form" autoComplete="off">
                    <label className="trips-filter__search input">
                        <span className="visually-hidden">Search by name</span>
                        <input name="search" type="search" placeholder="search by title" onChange={handleInputChange}/>
                    </label>
                    <label className="select">
                        <span className="visually-hidden">Search by duration</span>
                        <select name="duration" value={filteredData.duration} onChange={handleOptionDurationChange}>
                            <option value="">duration</option>
                            <option value="0_x_5">&lt; 5 days</option>
                            <option value="5_x_10">&lt; 10 days</option>
                            <option value="10_x">&ge; 10 days</option>
                        </select>
                    </label>
                    <label className="select">
                        <span className="visually-hidden">Search by level</span>
                        <select name="level" value={filteredData.level} onChange={handleOptionLevelChange}>
                            <option value="">level</option>
                            <option value="easy">easy</option>
                            <option value="moderate">moderate</option>
                            <option value="difficult">difficult</option>
                        </select>
                    </label>
                </form>
            </section>
            <section className="trips">
                <h2 className="visually-hidden">Trips List</h2>
                <ul className="trip-list">
                    {dataTravel
                    .filter(el => el.title.toLowerCase().includes(filteredData.input.toLowerCase()))
                    .filter(el => filteredData.level === '' ? true : el.level === filteredData.level)
                    .filter(el => {
                        if (filteredData.duration === '0_x_5') {
                            return el.duration < 5
                        }
                        if (filteredData.duration === '5_x_10') {
                            return el.duration < 10
                        }
                        if (filteredData.duration === '10_x') {
                            return el.duration > 10
                        }
                        return true
                    })
                    .map(el => <li key={el.id} className="trip-card"><HomePageTrip dataTravel={el} /></li>)}
                </ul>
            </section>
        </main>
    );
}

export default HomePage