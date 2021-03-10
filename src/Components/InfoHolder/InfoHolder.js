import React from 'react'

function InfoHolder(props) {
    // get data from props
    const { info } = props.info;
    return(
        <div className='infoHolder'>
            <h4>{info.length}</h4>
        </div>
    );
}

export default InfoHolder;