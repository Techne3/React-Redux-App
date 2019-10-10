import axios from 'axios'
import React from 'react'

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';


export const fetchFacts = () => dispatch => {
    // action objects
    dispatch({ type: START_FETCHING });
    // do some async action and dispatch an error or success action
    axios
      .get('https://dog.ceo/api/breeds/image/random')
      .then(res =>  console.log(res))

      .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
  };

//   https://cors-anywhere.herokuapp.com/