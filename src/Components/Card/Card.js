import { useHistory } from 'react-router-dom'

// import styleShett
import './Card.css'

function Card(props) {
    const {idLeague, strLeague, strSport} = props.league;

    const history = useHistory();
    const showDetailsHandler = id => {
        const url = `league/${id}`;
        history.push(url);
    }
    console.log(props.league)
    return(
        <div className='col-lg-4 col-md-6 col-sm-12 g-5 card'> 
            <h4>{strLeague}</h4>
            <p>{strSport}</p>
            <button onClick={() => showDetailsHandler(idLeague)}>Explore</button>
        </div>
    );
}

export default Card;