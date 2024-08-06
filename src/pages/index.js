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
      <div className="bg-gray-700 min-h-screen py-12"> {/* Light GitHub grey background */}
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold mb-8 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>ClipBrief</h1>
          <PlaceholdersAndVanishInput
            placeholders={['... Please enter a valid YouTube link for an AI Summary 🤖']}
            onChange={handleInputChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
