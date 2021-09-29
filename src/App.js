
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Favorites from './components/Favorites';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
      <div >
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/favorites' component={Favorites} />
          </Switch>
      </div>
  );
}

export default App;
