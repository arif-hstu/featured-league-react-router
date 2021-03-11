import React from 'react'

// import styleSheet
import './ImageHolder.css'

//import image
import maleImage from '../../images/male.png';
import femaleImage from '../../images/female.png';

function ImageHolder(props) {
    const { gender } = props;

    // conditional check if the gender is male or female
    let image = gender.toLowerCase() === 'male' ? maleImage : femaleImage;

    return(
        <div className='imageHolder'>
            <img src={image} alt='' />
        </div>
    );
}

export default ImageHolder;