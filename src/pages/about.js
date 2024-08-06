import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Get in touch with us" />
      </Head>
      <div className="pageContainer">
      <h1>About Us</h1>
      <p>If you have any questions, feel free to reach out to us.</p>
      </div>
    </Layout>
  );
};

export default AboutPage;
