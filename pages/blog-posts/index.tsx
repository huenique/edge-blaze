import { GetServerSideProps } from 'next';
import * as React from 'react';
import { authProvider } from 'src/authProvider';

import { MantineListInferencer } from '@refinedev/inferencer/mantine';

export default function BlogPostList() {
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
        destination: `${redirectTo}?to=${encodeURIComponent('/blog-posts')}`,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
