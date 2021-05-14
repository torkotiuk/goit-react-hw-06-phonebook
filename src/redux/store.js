import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './phonebook/contacts-reducer';

const rootReducers = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducers, composeWithDevTools());

export default store;
