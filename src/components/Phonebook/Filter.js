import PropTypes from 'prop-types';
import css from './Phonebook.module.css';
const Filter = ({ value, onChange }) => (
  <div className={css.filter_wrap}>
    <p className={css.filter_text}>Find contacts by name</p>
    <input
      className={css.filter_input}
      type="text"
      value={value}
      onChange={onChange}
    />
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
