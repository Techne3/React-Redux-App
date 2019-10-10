import {START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE} from '../actions'


const initialState = {
    doggos: [],
    status: false,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCHING:
                return {
                  ...state,
                  isFetching: true,
                  error: ''
                }
        default:
            return state
    }
}

    
