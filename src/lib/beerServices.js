import Network from './Network';

export const fetchBeers = () => {
  return Network.get('beers').then(beers => beers);
}

export const fetchUpdateRating = (id, rating) => {
  return Network.patch(`beers/${id}`, {rating}).then(id, rating);
}

export const fetchRemoveRating = (id) => {
  return Network.get(`beers/${id}`).then(beer => {
    delete beer['rating'];
    return Network.put(`beers/${id}`, beer).then(id);
  });
}





