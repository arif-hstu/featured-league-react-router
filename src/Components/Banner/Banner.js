import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


// import styleSheet
import './Banner.css'
function Banner() {

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
        <div className='banner'>
            <div className='banner-image'>
                <img src={
                    info.map(inf => inf.strFanart1)
                } alt="" />
            </div>
            <div className='title-badge'>
                <a href="/" alt=''>
                    <h2>Featured League Archives</h2>
                </a>
                <div className='banner-badge'>
                    <img src={
                    info.map(inf => inf.strBadge)
                    } />
                </div>
            </div>
        </div>
    );
}

export default Banner;