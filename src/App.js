import React, { Component } from 'react';
import Section from './components/share/Section';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Modal from './components/Modal';
import IconButton from './components/IconButton';
import { ReactComponent as AddIcon } from './icons/add.svg';

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    return (
      <Section>
        <IconButton onClick={this.toggleModal} arial-label="Add contact">
          <h2>Create contact</h2>
          <AddIcon width="40" height="40" fill="green" />
        </IconButton>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <h2 className="title_form">Create new contact</h2>
            <ContactForm onCloseModal={this.toggleModal} />
          </Modal>
        )}
        <Filter />
        <ContactList />
      </Section>
    );
  }
}
export default App;
