import { ErrorMessage, Formik } from 'formik';
import { FaUserAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { object, string } from 'yup';
import {
  Container,
  ErrorMessageText,
  FormBox,
  Input,
  Label,
  SubmitButton,
  Text,
  Title,
} from './AuthForm.styled';

const AuthForm = ({ title, fields, onSubmit }) => {
  const initialValues = fields.reduce((acc, field) => {
    acc[field] = '';
    return acc;
  }, {});

  const validationSchema = object(
    fields.reduce((acc, field) => {
      if (field === 'name') {
        acc[field] = string()
          .required(`${field} is required`)
          .min(2, `${field} is too short`)
          .max(25, `${field} is too long`);
      }

      if (field === 'email') {
        acc[field] = string()
          .email('Invalid email')
          .required('Email is required');
      }

      if (field === 'password') {
        acc[field] = string().required('Password is required');
      }

      return acc;
    }, {})
  );

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(onSubmit(values));
    resetForm();
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormBox autoComplete="off">
          <Title>{title}</Title>
          {fields.map(field => (
            <Label key={field}>
              <Text>
                {field === 'name' && <FaUserAlt size={20} />}
                {field === 'email' && <FiMail size={20} />}
                {field === 'password' && <RiLockPasswordFill size={20} />}
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </Text>
              <Input
                placeholder={`Please enter your ${field}`}
                type={field === 'password' ? 'password' : 'text'}
                name={field}
              />
              <ErrorMessage component={ErrorMessageText} name={field} />
            </Label>
          ))}
          <SubmitButton type="submit">
            {title === 'Registration' ? 'Sign Up' : 'Log In'}
          </SubmitButton>
        </FormBox>
      </Formik>
    </Container>
  );
};
export default AuthForm;
