import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const changeFilter = createAction('contacts/changeFilter');
const deleteContact = createAction('contacts/Delete');
const addContact = createAction('contacts/Add', value => ({
  payload: {
    id: shortid.generate(),
    ...value,
  },
}));

export default { addContact, deleteContact, changeFilter };
