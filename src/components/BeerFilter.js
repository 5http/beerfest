import React from 'react';
import {NavLink} from 'react-router-dom';

export default () => (
    <div className="beer-filter">
        <div className="content-container">
            <div className="filter__content">
                <NavLink to='/' className="button button--blue" activeClassName="active" exact={true}>All Beers</NavLink> 
                <NavLink to='/rated' className="button button--blue" activeClassName="active"> Rated Beers</NavLink>
            </div>
        </div>
    </div>
);