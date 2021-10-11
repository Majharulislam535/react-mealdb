import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import './data.css'

const Data = () => {
    const [data, setData] = useState('');
    const [meal, setMeal] = useState('');
    const [url, setUrl] = useState([]);
    const getData = (e) => {
        setData(e.target.value);
    }

    const searchData = (data) => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`;
        setMeal(url);
    }

    useEffect(() => {
        fetch(meal)
            .then(res => res.json())
            .then(data => setUrl(data.meals));
    }, [meal]);

    return (
        <>
            <div className="search-section">
                <div className="search">
                    <input type="text" placeholder="search-- meal" onChange={getData} />
                    <button onClick={() => searchData(data)}>Search</button>
                </div>
                <div className="grid">
                    {
                        url.map(ele => <Card meal={ele}></Card>)
                    }
                </div>
            </div>
        </>
    );
};

export default Data;