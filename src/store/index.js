import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  posts: []
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case "FETCH_POSTS":
      // console.log(action.payload, '<<<< test di store');
      return {...state, posts: action.payload}
    default: 
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store