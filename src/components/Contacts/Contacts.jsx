import { ContactList, ContactItem, Info } from './Contacts.styled';
import { Section } from '../Section/Section';
import PropTypes from 'prop-types';

export const Contacts = ({ contacts }) => {
  return (
    <ContactList>
      {contacts.map(({ name, number, id }) => (
        <ContactItem key={id}>
          <Info>&#10003;</Info>
          <Info>{name}:</Info>
          <Info>{number}</Info>
        </ContactItem>
      ))}
    </ContactList>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
