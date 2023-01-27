import { useSelector } from 'react-redux';

import ContactsItem from '../ContactsItem/ContactsItem';
import css from '../ContactsList/ContactsList.module.css';

const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const filtredContacts = getFiltredContacts();

  function getFiltredContacts() {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  return (
    <>
      <ul className={css.contactsList}>
        {filtredContacts.map(({id, name, phone}) => (
          <ContactsItem
            key={id}
            contact={{ id, name, phone }}
          />
        ))}
      </ul>
    </>
  
  );
};

export default ContactsList;