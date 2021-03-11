import React from 'react'

function Info(props) {
    // get data from props
    const { strLeague, intFormedYear, strSport, strCountry, strGender } = props.info;
    return(
        <div>
            <h3>{ strLeague }</h3>
            <h5>Founded: {intFormedYear}</h5>
            <h5>Country: {strCountry}</h5>
            <h5>Sports Type: {strSport}</h5>
            <h5>Gender: {strGender}</h5>
        </div>
    );
}

export default Info;