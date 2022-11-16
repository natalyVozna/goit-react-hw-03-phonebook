import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from '../Section/Section';
import { FormContact } from 'components/FormContact/FormContact';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { Title, SubTitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    this.setState(({ contacts }) => ({
      contacts: [{ ...data, id: nanoid() }, ...contacts],
    }));
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedContact = filter.toLowerCase();

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedContact);
    });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { filter } = this.state;
    const filterContacts = this.getFilterContacts();

    return (
      <Section>
        <Title>Phonebook</Title>
        <FormContact onSubmitHandle={this.formSubmitHandler} />
        <SubTitle>Contacts</SubTitle>
        <Filter value={filter} onChange={this.changeFilter} />
        {filterContacts.length > 0 && <Contacts contacts={filterContacts} />}
      </Section>
    );
  }
}
