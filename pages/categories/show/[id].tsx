import { GetServerSideProps } from 'next';
import * as React from 'react';
import { authProvider } from 'src/authProvider';

import { MantineShowInferencer } from '@refinedev/inferencer/mantine';

export default function CategoryShow() {
  return <MantineShowInferencer />;
}

export const getServerSideProps: GetServerSideProps<object> = async (
  context
) => {
  const { authenticated, redirectTo } = await authProvider.check(context);

  if (!authenticated) {
    return {
      props: {},
      redirect: {
        destination: `${redirectTo}?to=${encodeURIComponent('/categories')}`,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
