import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import { PlaceholdersAndVanishInput } from '../components/ui/placeholders-and-vanish-input';

const HomePage = () => {
  const [link, setLink] = useState('');

  const handleInputChange = (event) => {
    setLink(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted link:', link); // You can handle the link as needed
  };

  return (
    <Layout>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="This is the homepage of the site." />
      </Head>
      <div className="container mx-auto p-4">
      <PlaceholdersAndVanishInput
        type="url"
            id="linkInput"
            name="linkInput"
            value={link}
            onChange={handleInputChange}
            placeholders={['https://www.youtube.com/watch?v=r6tH55syq0o']}
            required
        onSubmit={handleSubmit}
      />
    </div>
    </Layout>
  );
};

export default HomePage;
