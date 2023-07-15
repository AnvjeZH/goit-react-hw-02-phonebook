import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import css from './Phonebook.module.css';
const ContactsList = ({ contacts, onDelete }) => (
  <div>
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  </div>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactsList;
