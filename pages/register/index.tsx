import * as React from 'react';
import { GetServerSideProps } from 'next';
import { authProvider } from 'src/authProvider';

import { AuthPage } from '@refinedev/mantine';

export default function Register() {
  return <AuthPage type="register" />;
}

Register.noLayout = true;

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
