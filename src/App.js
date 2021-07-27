import HomePage from './pages/HomePage/HomePage';
import { Route, Switch } from 'react-router-dom';
import './App.css';

const HatsPage = (props) => {
  console.log(props);
  return(
    <div>
      <button onClick={() => props.history.push('/hats')}>Hats here *</button>
      <h1>Hats Page</h1>
    </div>
  );
}

function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
