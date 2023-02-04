import { StyledInput, StyledLabel } from 'components/App/App.styled';
import { useDispatch } from 'react-redux';
import { filteredContacts } from '../../redux/contacts/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  function onChange (e) {
    dispatch(filteredContacts(e.currentTarget.value));
  }; 

  return (
    <>
      <StyledLabel>
        <span>Find contacts by name</span>
        <StyledInput type="text" onChange={onChange} />
      </StyledLabel>
    </>
  );
};

export default Filter;