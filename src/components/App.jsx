import React, { Component } from 'react';
import shortid from 'shortid';
// import { Notify } from 'notiflix';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import AddContacts from './AddContacts';
import ContacList from './ContacList';
import Section from './Section';
import Filter from './Filter';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    console.log('mount');
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);

    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('update');
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  addContacts = task => {
    // *worked till filter
    // console.log('task-name', name);
    // console.log('number', number);
    // const contactList = {
    //   id: shortid.generate(),
    //   name,
    //   number,
    // };
    const searchSimilarNames = this.state.contacts
      .map(cont => cont.name)
      .includes(task.name);

    if (searchSimilarNames) {
      toast.error(`${task.name} is already in contacts, mate!`);
    } else if (task.name.length === 0) {
      toast.error("Fill mY DesIre, or i'll find YOU");
    } else {
      const contact = {
        id: shortid.generate(),
        ...task,
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getvisibleContactsByFilter = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(cont => cont.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getvisibleContactsByFilter();
    return (
      <>
        <Section title="Phonebook">
          <AddContacts onSubmit={this.addContacts} />
        </Section>

        <Section title="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          <ContacList
            contacts={visibleContacts}
            onContactDelete={this.deleteContacts}
          />
          <ToastContainer />
        </Section>
      </>
    );
  }
}

export default App;
