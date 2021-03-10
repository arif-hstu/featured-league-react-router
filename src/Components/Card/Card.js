import React from 'react'

// import styleShett
import './Card.css'

function Card(props) {
    const {strLeague, strSport} = props.league;
    return(
        <div className='col-lg-4 col-md-6 col-sm-12 g-5 card'> 
            <h4>{strLeague}</h4>
            <p>{strSport}</p>
        </div>
    );
}

export default Card;