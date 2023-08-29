import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import AuthForm from 'components/AuthForm';

const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = values => {
    const { email, password } = values;
    dispatch(logIn({ email, password }));
  };

  return (
    <AuthForm
      title="Authorization"
      fields={['email', 'password']}
      onSubmit={onSubmit}
    />
  );
};

export default LoginForm;
