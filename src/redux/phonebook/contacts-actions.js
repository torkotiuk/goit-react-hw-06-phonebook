import shortid from 'shortid';
import types from './contacts-types';

const addContact = value => ({
  type: types.ADD,
  payload: { id: shortid.generate(), ...value },
});

const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default { addContact, deleteContact, changeFilter };
