import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => (
    <div>
        <Link to='/'>All</Link> - 
        <Link to='/rated'> Rated</Link>
    </div>
)