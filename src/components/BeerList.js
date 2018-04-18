import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getBeers, filterBeers} from '../reducers/beers';
import {Link} from 'react-router-dom';

const BeerItem = ({id, thumb_image_url, name, brewery, rating}) => (
    <div>
        <img src={thumb_image_url} alt={brewery.name} />
        <Link to={`/beers/${id}`}>{name}</Link> - {brewery.name} {rating ? `- ${rating}` : ''}
        {/* <span className='delete-item'>
            <button onClick={() => deleteTodo(id)}>X</button>
        </span>
        <input type="checkbox" 
            checked={isComplete} 
            onChange={() => toggleTodo(id)}
        />{name} */}
    </div>
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
                {this.props.beers.map(beer => 
                    <BeerItem {...beer} 
                        key={beer.id}
                        //toggleTodo={this.props.toggleTodo}
                        //deleteTodo={this.props.deleteTodo}
                    />
                )}
            </div>
        )
    }
} 

const mapStateToProps = (state, props) => ({
    stateBeers: state.beers,
    beers: filterBeers(state.beers, props.filter)
})

export default connect(mapStateToProps, {getBeers})(BeerList);
