import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';

// import styleSheet
import './CardHolder.css'

function CardHolder() {

    // useState hook to hold the fetched data
    const [leagues, setLeagues] = useState([]);

    // useEffect hook to fetch the data from api
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagues(data.leagues))
        .catch(err => console.log(err))
    }, []);

    return(
        <div className='container cardHolder'>
            <div className='row'>
                {
                    leagues.map((league, id) => <Card key={id} league={league}></Card>)
                }
            </div>
        </div>
    );
}

export default CardHolder;