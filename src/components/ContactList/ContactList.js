import { useSelector } from 'react-redux';
import ContactListItem from 'components/ContactListItem';
import { Item, List } from './ContactList.styled';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

const ContactsList = ({ contactList }) => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <List>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
        {contactList.map(({ id, name, number }) => (
          <Item key={id} >
            <ContactListItem id={id} name={name} number={number} />
          </Item>
        ))}
      </List>
    </div>
  );
};

export default ContactsList;
