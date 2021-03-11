import './App.css';
import CardHolder from './Components/CardHolder/CardHolder';

// import Components
import Header from './Components/Header/Header'

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import Details from './Components/Details/Details';

function App() {
  return (
    <div>

      <Router>
        <Switch>
          <Route exact path='/'>
            <Header></Header>
            <CardHolder></CardHolder>
          </Route>
        </Switch>
        <Switch>
          <Route exact path='/league/:id'>
            <Details></Details>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
