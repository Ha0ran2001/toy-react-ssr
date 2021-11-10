import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import useReducer from './users/users.reducer'

const store = createStore(useReducer, applyMiddleware(thunk));

export default store;