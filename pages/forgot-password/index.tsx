import { GetServerSideProps } from 'next';
import * as React from 'react';
import { authProvider } from 'src/authProvider';

import { AuthPage } from '@refinedev/mantine';

export default function ForgotPassword() {
  return <AuthPage type="forgotPassword" />;
}

ForgotPassword.noLayout = true;

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
