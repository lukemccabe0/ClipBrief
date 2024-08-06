import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';

const ContactPage = () => {
  return (
    <Layout>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Get in touch with us" />
      </Head>
      <div className="pageContainer">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us.</p>
      </div>
    </Layout>
  );
};

export default ContactPage;
