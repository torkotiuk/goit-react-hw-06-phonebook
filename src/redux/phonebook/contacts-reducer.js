import { combineReducers } from 'redux';
import types from './contacts-types';

const items = (state = [], action) => {
  switch (action.type) {
    case types.ADD:
      return [...state, action.payload];

    case types.DELETE:
      return state.filter(contact => contact.id !== action.payload);

    default:
      return state;
  }
};

const filter = (state = '', action) => {
  switch (action.type) {
    case types.CHANGE_FILTER:
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({ items, filter });
