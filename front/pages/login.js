import Head from 'next/head';
import Router from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
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
