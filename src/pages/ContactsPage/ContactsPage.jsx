import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Section, Container } from 'components/App/App.styled'; 
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
    <Section>
      <Container>
        <ContactForm />
        {isShow && (
          <>
            <h2>Contacts</h2>
            <Filter />
            <ContactsList />
          </>
        )}
      </Container>
    </Section>
  );
};

export default ContactsPage;

// <h1>Phonebook</h1>
// <ContactForm/>
// {isShow && <><h2>Contacts</h2><Filter /><ContactsList /></>}

// export const ContactsPage = () => {
//   return <h1>ContactsPage</h1>;
// };
