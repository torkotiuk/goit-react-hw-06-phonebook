import { Component } from 'react';
import shortid from 'shortid';
import './ContactForm.module.scss';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import contactsActions from '../../redux/phonebook/contacts-actions';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.getData(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId} className="form__input">
          Name:
          <input
            id={this.nameInputId}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor={this.numberInputId}>
          Number:
          <input
            id={this.numberInputId}
            type="tel"
            name="number"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <div className="btnAdd">
          <Button variant="contained" className="btn" type="submit">
            Add
          </Button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getData: value => dispatch(contactsActions.addContact(value)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
