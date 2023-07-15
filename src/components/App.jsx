import { Component } from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid';
import ContactForm from './Phonebook/ContactForm';
import Filter from './Phonebook/Filter';
import ContactsList from './Phonebook/ContactsList';

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

  addNewContact = (name, number) => {
    const duplicateName = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (duplicateName) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  deleteContact = filteredId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== filteredId),
    }));
  };

  render() {
    const filteredContact = this.getFilteredContact();

    return (
      <div className={css.container}>
        <h1 className={css.main_title}>Phonebook</h1>
        <ContactForm onSubmit={this.addNewContact} />
        {this.state.contacts.length > 0 && (
          <div>
            <h2 className={css.subtitle}>Contacts</h2>
            <Filter value={this.state.filter} onChange={this.changeFilter} />
            <ContactsList
              contacts={filteredContact}
              onDelete={this.deleteContact}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
