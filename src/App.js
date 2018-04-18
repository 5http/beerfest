import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import logo from './logo.svg';
import './App.css';
import BeerFilter from './components/BeerFilter';
import BeerList from './components/BeerList';
import BeerDetail from './components/BeerDetail';

export const history = createHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Beerfest</h1>
        </header>
        
        <Router history={history}>
          <div>
            <BeerFilter />
            <Switch>
                <Route path='/:filter?' render={({match}) => (
                  <BeerList filter={match.params.filter} />
                )} exact={true} />
                <Route path='/beers/:id' component={BeerDetail} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
