import React, { Component } from 'react';
import './AddContacts.css';

class AddContacts extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({ ...this.state });

    this.setState({ name: '', number: '' });
  };

  render() {
    //* value={name} в інпуті при скиданні state оновлює поле інпута
    const { name, number } = this.state;
    return (
      <form
        className="phonebook-form"
        onSubmit={this.handleSubmit}
        autoComplete="on"
      >
        <label className="phonebook-form__label">
          <span className="phonebook-form__label-name">Name:</span>
          <input
            className="phonebook-form__input"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </label>

        <label className="phonebook-form__label">
          <span className="phonebook-form__label-name">Phone:</span>
          <input
            className="phonebook-form__input"
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </label>

        <button type="submit" className="phonebook-form__btn">
          Add contact
        </button>
      </form>
    );
  }
}

export default AddContacts;

//* для 1 елемента - гуд, но нет динамики
//   handleChangeName = event => {
//     this.setState({ name: event.currentTarget.value });
//   };

//   handleChangePhone = event => {
//     this.setState({ number: event.currentTarget.value });
//   };
