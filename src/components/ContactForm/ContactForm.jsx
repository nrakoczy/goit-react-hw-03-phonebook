import React, { Component } from 'react';
import css from 'components/ContactForm/ContactForm.module.css';
import PropTypes from 'prop-types';

let counter = 0;

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  constructor(props) {
    super(props);
    this.nameInputId = `nameInput-${counter++}`;
    this.numberInputId = `numberInput-${counter++}`;
  }

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label htmlFor={this.nameInputId} className={css.label}>
          Name
        </label>

        <input
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleInputChange}
          id={this.nameInputId}
          className={css.inputForm}
        />

        <label htmlFor={this.numberInputId} className={css.label}>
          Number
        </label>

        <input
          type="tel"
          name="number"
          value={this.state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleInputChange}
          id={this.numberInputId}
          className={css.inputForm}
        />

        <button type="submit" className={css.btnForm}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
