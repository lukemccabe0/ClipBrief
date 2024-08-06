import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';

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
      <div className="pageContainer">
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple Next.js application.</p>
      <form onSubmit={handleSubmit} className={"inputform"}>
          <label htmlFor="linkInput">Enter a Link:</label>
          <input
            type="url"
            id="linkInput"
            name="linkInput"
            value={link}
            onChange={handleInputChange}
            placeholder="https://www.youtube.com/watch?v=r6tH55syq0o"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default HomePage;
