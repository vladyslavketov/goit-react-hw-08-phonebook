import { useDispatch } from "react-redux";
import { deleteContact } from '../../redux/contacts/contactsOperations';
import { Button } from "components/Button/Button";

import PropTypes from 'prop-types';
import css from '../ContactsItem/ContactsItem.module.css'

const ContactsItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <li key={id} className={css.contactsItem}>
      <span>{name}</span>
      <span>{number}</span>
      {/* <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button> */}
      <Button title={"Delete"} onClick={() => dispatch(deleteContact(id))} />
    </li>
  );
};

ContactsItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsItem;