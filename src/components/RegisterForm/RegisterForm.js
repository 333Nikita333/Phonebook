import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  FormBox,
  InputLogin,
  InputEmail,
  InputPassword,
  Button,
  FormikWrapper,
} from './RegisterForm.styled';
import { ErrorMessage } from 'formik';
import { object, string } from 'yup';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const userSchema = object({
  name: string().required(),
  email: string().required(),
  password: string().required(),
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    const contact = { name, email, password };
    console.log(contact);
    dispatch(register({ name, email, password }));
    resetForm();
  };

  return (
    <FormikWrapper
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <FormBox autoComplete="off">
        <label>
          <span>Name</span>
          <InputLogin type="text" name="name" />
          <ErrorMessage name="name" />
        </label>
        <label>
          <span>Email</span>
          <InputEmail type="text" name="email" />
          <ErrorMessage name="email" />
        </label>
        <label>
          <span>Password</span>
          <InputPassword type="password" name="password" />
          <ErrorMessage name="password" />
        </label>
        <Button type="submit">Register</Button>
      </FormBox>
    </FormikWrapper>
    /* <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <input type="text" name="name" required />
      </label>
      <label>
        Email
        <input type="email" name="email" required />
      </label>
      <label>
        Password
        <input type="password" name="password" required />
      </label>
      <button type="submit">Register</button>
    </form> */
  );
};

export default RegisterForm;
