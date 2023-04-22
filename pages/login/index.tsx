import { GetServerSideProps } from 'next';
import * as React from 'react';
import { authProvider } from 'src/authProvider';

import { AuthPage } from '@refinedev/mantine';

export default function Login() {
  return (
    <AuthPage
      type="login"
      formProps={{
        initialValues: { email: 'demo@refine.dev', password: 'demodemo' },
      }}
    />
  );
}

Login.noLayout = true;

export const getServerSideProps: GetServerSideProps<object> = async (
  context
) => {
  const { authenticated, redirectTo } = await authProvider.check(context);

  if (authenticated) {
    return {
      props: {},
      redirect: {
        destination: redirectTo ?? '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
