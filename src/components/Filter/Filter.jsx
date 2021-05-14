import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/phonebook/contacts-actions';

const Filter = ({ valueState, filterByName }) => {
  return (
    <label className="filter">
      Filter by name:
      <input type="text" value={valueState} onChange={filterByName} />
    </label>
  );
};

const mapStateToProps = state => ({
  valueState: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  filterByName: e => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
