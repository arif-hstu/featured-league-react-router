import React, { useEffect, useState } from 'react'

function CardImage(props) {
    const idLeague = props.idLeague;

    const [league, setLeague] =useState([]);
    
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
        .then(res => res.json())
        .then(data => setLeague(data.leagues))
        .catch(err => console.log(err))
    }, [])

    return(<>
        <img src={
            league.map(lg => lg.strBadge)
        }/>
        </>
    )
}

export default CardImage;
