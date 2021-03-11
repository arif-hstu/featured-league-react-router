import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Banner from '../Banner/Banner';
import InfoCard from '../InfoCard/InfoCard';

// import styleSheet
import './Details.css'

function Details() {
    // catch the path variable by useParams
    const { id } = useParams();

    //useState hook to set the fetched data
    const [info, setInfo] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setInfo(data.leagues))
        .catch(err => console.log(err))
    }, [])

    return (
        <>  
            <Banner></Banner>
            <div className='infoHolder'>
                {
                    info.map(inf => <InfoCard info={inf}></InfoCard>)
                }
            </div>
            <div className='description'>
                {
                    info.map(inf => <div><p>{inf.strDescriptionEN}</p></div>)
                }
            </div>
        </>
    );
}

export default Details;