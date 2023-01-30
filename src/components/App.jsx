import { useEffect, lazy } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from 'react-router-dom';

import { fetchContacts } from "redux/contactsOperations";

// import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';
// import ContactsList from './ContactsList/ContactsList';

export default function App() {
  const dispatch = useDispatch();
  // const contacts = useSelector(state => state.contacts.items);
  // const isShow = contacts.length > 0;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<h1>Phonebook</h1>}></Route>
    </Routes>
  );
};



// <h1>Phonebook</h1>
// <ContactForm/>
// {isShow && <><h2>Contacts</h2><Filter /><ContactsList /></>}

// <div style={{ padding: "12px 16px"}}></div>