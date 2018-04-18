import {fetchBeers, fetchUpdateRating, fetchRemoveRating} from '../lib/beerServices';

const defaultState = [];

export const GET_BEERS = 'GET_BEERS';
export const UPDATE_RATING = 'UPDATE_RATING';
export const REMOVE_RATING = 'REMOVE_RATING';

export const storeBeers = (beers) => ({type: GET_BEERS, beers});
export const storeUpdateRating = (id, rating) => ({type: UPDATE_RATING, id, rating});
export const storeRemoveRating = (id) => ({type: REMOVE_RATING, id});

export const getBeers = () => {
    return (dispatch) => {
        fetchBeers()
        .then(beers => dispatch(storeBeers(beers)));
    }
}

export const filterBeers = (beers, filter) => {
    switch (filter) {
        case 'rated':
            return beers.filter(b => b.rating);
        default:
            return beers;
    }
}

export const updateRating = (id, rating) => {
    return (dispatch) => {
        fetchUpdateRating(id, rating)
        .then(() => dispatch(storeUpdateRating(id, rating)));
    }
}

export const removeRating = (id) => {
    return (dispatch) => {
        fetchRemoveRating(id)
        .then(() => dispatch(storeRemoveRating(id)));
    }
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case GET_BEERS:
            return action.beers;
        case UPDATE_RATING:
            return state.map((beer) => {
                if(beer.id === action.id) {
                    return {
                        ...beer,
                        rating: action.rating,
                    }
                } else {
                    return beer;
                }
            });
        case REMOVE_RATING:
            return state.map((beer) => {
                if(beer.id === action.id) {
                    delete beer['rating'];
                    return beer;
                } else {
                    return beer;
                }
            });
        default:
            return state;
    }    
}