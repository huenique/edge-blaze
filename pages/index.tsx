import * as React from 'react';

import { NavigateToResource } from '@refinedev/nextjs-router';

export default function Home() {
  return <NavigateToResource resource="blog_posts" />;
}

Home.noLayout = true;
