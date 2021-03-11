import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import CardImage from '../CardImage/CardImage';

// import styleShett
import './Card.css'

function Card(props) {
    const { idLeague, strLeague, strSport } = props.league;

    const history = useHistory();
    const showDetailsHandler = id => {
        const url = `league/${id}`;
        history.push(url);
    }

    return (

        <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='card'>
                <div><CardImage idLeague={idLeague} /></div>
                <h5>{strLeague}</h5>
                <p>Sports Type: {strSport}</p>
                <div><button onClick={() => showDetailsHandler(idLeague)}>Explore</button></div>
            </div>
        </div>

    );
}

export default Card;