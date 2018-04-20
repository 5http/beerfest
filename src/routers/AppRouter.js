import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import BeerFilter from '../components/BeerFilter';
import BeerList from '../components/BeerList';
import BeerDetail from '../components/BeerDetail';
import NotFound from '../components/NotFound';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';

export const history = createHistory();

class AppRouter extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Header />            
            <BeerFilter />
            <Switch>
                <Route path='/:filter?' render={({match}) => (
                  <BeerList filter={match.params.filter} />
                )} exact={true} />
                <Route path='/beers/:id' component={BeerDetail} />
                <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default AppRouter;
