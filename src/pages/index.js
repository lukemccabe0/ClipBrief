// src/pages/index.js
import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import { PlaceholdersAndVanishInput } from '../components/ui/placeholders-and-vanish-input';
import { CSSTransition } from 'react-transition-group';
import SummaryComponent from '../components/summaryComponent';
import '../pages/_app'; // Import your CSS file

const HomePage = () => {
  const [link, setLink] = useState('');
  const [showCard, setShowCard] = useState(false); // State to track if the card should be shown

  const handleInputChange = (event) => {
    setLink(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowCard(true);
  };

  return (
    <Layout>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="This is the homepage of the site." />
      </Head>
      <div className="bg-[#000000] min-h-screen py-12"> {/* Light GitHub grey background */}
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold mb-8 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>ClipBrief</h1>
          <PlaceholdersAndVanishInput
            placeholders={['... Please enter a valid YouTube link for an AI Summary 🤖']}
            onChange={handleInputChange}
            onSubmit={handleSubmit}
            width ={500}
          />
        </div>
        <CSSTransition // Start of the summary box
          in={showCard}
          timeout={999}
          classNames="fade"
          unmountOnExit
        >
          <div className="flex items-start justify-center mt-8">
            <div className="text-center">
              <SummaryComponent youtubeUrl={link} />
            </div>
          </div>
        </CSSTransition>
      </div>
    </Layout>
  );
};

export default HomePage;
