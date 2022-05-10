import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <>
      <Head>
        <title>내 프로필</title>
      </Head>
      <AppLayout>
        <LoginForm />
      </AppLayout>
    </>
  );
};

export default Login;
