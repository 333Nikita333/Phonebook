import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

import { addContact, fetchContacts } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

import { useEffect } from 'react';
import ContactsForm from 'components/ContactsForm';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactList/ContactList';
import { filterListContacts } from 'redux/filrer/selectors';

const ContactsBar = () => {
  const contactList = useSelector(filterListContacts);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const notifiesAlert = (numberContact, nameContact) => {
    return toast.error(
      `${numberContact} is already in contacts under the name ${nameContact}.`
    );
  };

  const checkСontact = newNumber => {
    return contacts.some(contact => contact.number === newNumber);
  };

  const addingContact = contact => {
    if (!contact) {
      return;
    }

    if (checkСontact(contact.number)) {
      notifiesAlert(contact.number, contact.name);
      return;
    }

    contact.id = nanoid();

    dispatch(addContact(contact));
    toast.success(`Contact ${contact.name} added successfully`);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm onSubmit={addingContact}/>
      <div>
        <h2>Contacts</h2>
        <Filter />
      </div>
      <ContactsList contactsList={contactList} />
    </div>
  );
};

export default ContactsBar;
