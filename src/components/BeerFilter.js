import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router';

class BeerFilter extends Component {

    onSortChange = (e) => {
        //e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount();
    };

    componentDidMount() {
        //console.log(this.props.filters);
    }

    render() { 
        return (
            <div className="beer-filter">
                <div className="content-container">
                    <div className="input-group">
                        <div className="input-group__item">
                            <NavLink to='/' className="button button--blue" activeClassName="active" exact={true}>All Beers</NavLink> 
                            <NavLink to='/rated' className="button button--blue" activeClassName="active"> Rated Beers</NavLink>
                        </div>
                        {/* <div className="input-group__item">
                            <select 
                                className="select"
                                //value={this.props.filters.sortBy}
                                //onChange={this.onSortChange}
                            >
                                <option value="name">Name</option>
                                <option value="rating">Rating</option>
                            </select>
                        </div> */}
                    </div>
                </div>
            </div>
        )   
    }
} 

const mapStateToProps = (state) => ({
    filters: state
});

const mapDispatchToProps = (dispatch) =>  ({
    // sortByDate: () => dispatch(sortByDate()),
    // sortByAmount: () => dispatch(sortByAmount())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BeerFilter));
