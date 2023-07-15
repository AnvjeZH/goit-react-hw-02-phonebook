import PropTypes from 'prop-types';
import css from './Phonebook.module.css';

const ContactItem = ({ id, name, number, onDelete }) => (
  <li className={css.item} key={id}>
    <p className={css.descr}>
      {name}: {number}
    </p>
    <button
      className={css.delete_btn}
      type="button"
      onClick={() => onDelete(id)}
    >
      Delete
    </button>
  </li>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
