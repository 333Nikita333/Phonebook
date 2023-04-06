import { useDispatch } from 'react-redux';

import { addContact } from 'redux/contacts/operations';

const ContactsForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Number
        <input type="number" name="number" />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactsForm;
