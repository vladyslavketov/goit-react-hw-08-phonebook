import { useEffect, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';

// import { fetchContacts } from "redux/contactsOperations";

import Layout from './Layout/Layout';
// import HomePage from 'pages/HomePage/HomePage';
// import RegisterPage from 'pages/RegisterPage/RegisterPage';
// import LoginPage from 'pages/LoginPage/LoginPage';
// import ContactsPage from 'pages/ContactsPage/ContactsPage';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

// import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';
// import ContactsList from './ContactsList/ContactsList';

export default function App() {
//   const dispatch = useDispatch();
//   // const contacts = useSelector(state => state.contacts.items);
//   // const isShow = contacts.length > 0;

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

// <Route path="*" element={<Home />} />

// <h1>Phonebook</h1>
// <ContactForm/>
// {isShow && <><h2>Contacts</h2><Filter /><ContactsList /></>}

// <div style={{ padding: "12px 16px"}}></div>