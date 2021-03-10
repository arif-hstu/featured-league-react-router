import React from 'react'

// import styleSheet
import './ImageHolder.css'

//import image
import maleImage from '../../images/maleImage.jpg';
import femaleImage from '../../images/femaleImage.jpg';

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