import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import { getContacts } from 'redux/contacts/contactsOperations';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const isShow = contacts.length > 0;

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <section>
      <ContactForm />
      {isShow && (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactsList />
        </>
      )}
    </section>
  );
};

export default ContactsPage;

// <h1>Phonebook</h1>
// <ContactForm/>
// {isShow && <><h2>Contacts</h2><Filter /><ContactsList /></>}

// export const ContactsPage = () => {
//   return <h1>ContactsPage</h1>;
// };
