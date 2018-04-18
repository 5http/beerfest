import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getBeers, updateRating, removeRating} from '../reducers/beers';
import Rating from 'react-rating';

export class BeerDetail extends Component {

    componentDidMount() {
        if(this.props.stateBeers.length === 0) {
            this.props.getBeers();
        }
    }

    componentDidUpdate() {
        //console.log(this.props.beer);
    }

    updateRating(rating) {
        this.props.updateRating(this.props.beer.id, rating);
    }

    addRating() {
        this.props.updateRating(this.props.beer.id, 3);
    }

    removeRating() {
        this.props.removeRating(this.props.beer.id);
    }

    render() {
        return (
            <div>
                {this.props.beer ? (
                    <div>
                        {this.props.beer.name} <br />
                        <img src={this.props.beer.image_url} alt={this.props.beer.brewery.name} /> <br />
                        {this.props.beer.brewery.name} <br />
                        {this.props.beer.brewery.address} <br />
                        {this.props.beer.brewery.city} <br />
                        {this.props.beer.brewery.country} <br />
                        {this.props.beer.rating ? (
                            <div>
                                <Rating 
                                    initialRating={this.props.beer.rating}
                                    onChange={(rating) => this.updateRating(rating)}
                                /> <br />
                                <button onClick={() => this.removeRating()}>Remove rating</button>
                            </div>
                        ) : (
                            <div>
                                <button onClick={() => this.addRating()}>Add rating</button>
                            </div>
                        )}
                    </div>
                ) : ('Loading')}
            </div>
        );
    };
};

const mapStateToProps = (state, props) => ({
    stateBeers: state.beers,
    beer: state.beers.find((beer) => beer.id === parseInt(props.match.params.id, 10))
});

const mapDispatchToProps = (dispatch, props) => ({
    getBeers: () => dispatch(getBeers()),
    updateRating: (id, rating) => dispatch(updateRating(id, rating)),
    removeRating: (id) => dispatch(removeRating(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BeerDetail);
