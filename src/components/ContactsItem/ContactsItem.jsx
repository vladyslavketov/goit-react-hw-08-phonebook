import { useDispatch } from "react-redux";
import { deleteContact } from '../../redux/contactsOperations';

import PropTypes from 'prop-types';
import css from '../ContactsItem/ContactsItem.module.css'

const ContactsItem = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();

  return (
    <li key={id} className={css.contactsItem}>
      <span>{name}</span>
      <span>{phone}</span>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
};

ContactsItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsItem;