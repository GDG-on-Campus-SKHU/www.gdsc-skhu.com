import Head from 'next/head';

import { BASE_URL } from '../../../constants/common';

interface Props {
  title: string;
  urlPath: string;
}

export default function SEO({ title, urlPath }: Props) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="canonical" href={BASE_URL + urlPath} />
      <meta property="og:url" content={BASE_URL + urlPath} />
    </Head>
  );
}
