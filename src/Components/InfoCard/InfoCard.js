import React from 'react'
import Info from '../Info/Info'
import ImageHolder from '../ImageHolder/ImageHolder'

// import style sheet
import './InfoCard.css'

function InfoCard(props) {
    const { strGender, strDescriptionEN } = props.info;
    return(
        <>
        <div className='infoCard'>
            <Info info={props.info}></Info>
            <ImageHolder gender={strGender}></ImageHolder>
        </div>
        </>
    );
}

export default InfoCard;