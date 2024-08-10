import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { deleteContact } from '../actions/contactActions';
import { deleteContact } from '../store/store/contactsSlice.js';

function ContactList() {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts &&
        contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.email}
            <button onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}

export default ContactList;
