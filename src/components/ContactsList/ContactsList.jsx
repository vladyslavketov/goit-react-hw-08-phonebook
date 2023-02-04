import { useSelector } from 'react-redux';

import ContactsItem from '../ContactsItem/ContactsItem';
import { List } from './ContactsList.styled';

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
      <List >
        {filtredContacts.map(({ id, name, number }) => (
          <ContactsItem key={id} contact={{ id, name, number }} />
        ))}
      </List>
    </>
  );
};

export default ContactsList;