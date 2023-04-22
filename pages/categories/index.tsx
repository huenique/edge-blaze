import * as React from 'react';
import { GetServerSideProps } from 'next';
import { authProvider } from 'src/authProvider';

import { MantineListInferencer } from '@refinedev/inferencer/mantine';

export default function CategoryList() {
  return <MantineListInferencer />;
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
