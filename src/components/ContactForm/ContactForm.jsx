import { StyledForm, StyledInput, StyledLabel } from 'components/App/App.styled';
import { Button } from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsOperations';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  function handleSubmit(e) {
    e.preventDefault();

    const { name, number } = e.currentTarget.elements;
    
    if (contacts.find(contact => contact.name === name.value)) {
      return alert(`${name} is already in contacts.`);
    };

    const newContact = {
      name: name.value,
      number: number.value,
    };

    dispatch(addContact(newContact));
    e.currentTarget.reset();
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>
          Name
          <StyledInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </StyledLabel>
        <StyledLabel>
          Number
          <StyledInput type="tel" name="number" required />
        </StyledLabel>
        <Button type={'submit'} title={'Add contact'} />
      </StyledForm>
    </>
  );
};