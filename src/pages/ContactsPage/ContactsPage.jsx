import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Section, Container, Box } from 'components/App/App.styled'; 
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
          <Box>
            <h2>Your contacts</h2>
            <Filter />
            <ContactsList />
          </Box>
        )}
      </Container>
    </Section>
  );
};

export default ContactsPage;
