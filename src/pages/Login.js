import LoginForm from 'components/LoginForm';

const { Helmet } = require('react-helmet');

const Login = () => {
  return (
    <main>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
      
    </main>
  );
};

export default Login;
