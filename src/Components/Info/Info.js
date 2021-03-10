import React from 'react'

function Info(props) {
    // get data from props
    const { intFormedYear, strSport, strCountry, strGender } = props.info;
    return(
        <div>
            <h4>Founded: {intFormedYear}</h4>
            <h4>Country: {strCountry}</h4>
            <h4>Sport Type: {strSport}</h4>
            <h4>Gender: {strGender}</h4>
        </div>
    );
}

export default Info;