import React from 'react'
import Info from '../Info/Info'
import ImageHolder from '../ImageHolder/ImageHolder'

// import style sheet
import './InfoCard.css'

function InfoCard(props) {
    const { strGender, strDescriptionEN } = props.info;
    return(
        <div className='infoCard row'>
            <div className='col-lg-6 col-md-12 col-sm-12'><Info info={props.info}></Info></div>
            <div className='col-lg-6 col-md-12 col-sm-12'><ImageHolder gender={strGender}></ImageHolder></div>
        </div>
    );
}

export default InfoCard;