import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import AuthForm from 'components/AuthForm';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const onSubmit = values => {
    const { name, email, password } = values;
    dispatch(register({ name, email, password }));
  };

  return (
    <AuthForm
      title="Registration"
      fields={['name', 'email', 'password']}
      onSubmit={onSubmit}
    />
  );
};

export default RegisterForm;
