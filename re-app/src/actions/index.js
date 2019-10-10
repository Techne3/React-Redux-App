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
      .get('https://dog.ceo/api/breed/husky/images')
      .then(res => console.log(res.data) )
      .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
      // dispatch({type: 'FETCH_SUCCESS', payload:res. data})
  };

//   dispatch({type:FETCH_SUCCESS, payload: res.data.message})

  // redux thunk
  const tunk = next => action => store=> {
      if (typeof action === 'object'){
          next(action); 
      }else if (typeof action === 'fucntion'){
          action(store.dispatch);// stop action
      }
  }

//   https://cors-anywhere.herokuapp.com/