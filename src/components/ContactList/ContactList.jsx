import Stat from '../Stat';
import styles from './ContactList.module.scss';

import { connect } from 'react-redux';
import contactsActions from '../../redux/phonebook/contacts-actions';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  TitleContainer: {
    display: 'flex',
    alignItems: 'baseline',
  },
  container: {
    width: '350px',
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',

    width: '400px',
    border: '1px solid grey',
    borderRadius: '4px',
    padding: '10px',
  },
  number: {
    paddingRight: '20px',
  },
}));

const ContactList = ({ items, onDeleteContact, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.TitleContainer}>
        <h3 className="title">Contacts</h3>
        <Stat />
      </div>
      {children}
      {items.map(contact => (
        <li key={contact.id} className={styles.ContactList__item}>
          <p>{contact.name}</p>
          <p className={classes.number}>{contact.number}</p>
          <Button
            variant="contained"
            type="button"
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </Button>
        </li>
      ))}
    </div>
  );
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  items: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
