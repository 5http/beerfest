import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getBeers, filterBeers} from '../reducers/beers';
import {Link} from 'react-router-dom';
import Rating from 'react-rating';

const BeerItem = ({id, thumb_image_url, name, brewery, rating}) => (
    <Link className="beer-list__item" to={`/beers/${id}`}>
        <div className="item-left">
            <img src={thumb_image_url} alt={brewery.name} />
            <div><h3>{name}</h3><span>{brewery.name}</span></div>
        </div>
        {rating ? (
            <Rating initialRating={rating} readonly />
        ) : ('')}
    </Link>
)

class BeerList extends Component {

    componentDidMount() {
        if(this.props.stateBeers.length === 0) {
            this.props.getBeers();
        }
    }

    componentDidUpdate() {
        //console.log(this.props.beers);
    }

    render () {
        return (
            <div className="beer-list">
                <div className="content-container">
                    {this.props.beers.map(beer => 
                        <BeerItem {...beer} 
                            key={beer.id}
                        />
                    )}
                </div>
            </div>
        )
    }
} 

const mapStateToProps = (state, props) => ({
    stateBeers: state.beers,
    beers: filterBeers(state.beers, props.filter)
})

export default connect(mapStateToProps, {getBeers})(BeerList);
