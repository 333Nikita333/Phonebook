import { Helmet } from 'react-helmet';
import RegisterForm from 'components/RegisterForm';

const Register = () => {
  return (
    <main>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </main>
  );
};

export default Register;
