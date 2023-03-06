import React from 'react';
import './ContactList.css';

const ContactList = ({ contacts, onContactDelete }) => (
  <ul className="contact-list">
    {contacts.map(({ id, name, number }) => (
      <li className="contact-list__item" key={id}>
        <p className="contact-list__item-p">
          {name}:<span className="contact-list__item-span">{number}</span>
        </p>
        <button
          type="button"
          className="contact-list__btn"
          onClick={() => onContactDelete(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
