import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import { PlaceholdersAndVanishInput } from '../components/ui/placeholders-and-vanish-input';
import { CardSpotlight } from "../components/ui/card-spotlight";
import { CSSTransition } from 'react-transition-group';
import '../pages/_app'; // Import your CSS file

const HomePage = () => {
  const [link, setLink] = useState('');
  const [captions, setCaptions] = useState('');
  const [error, setError] = useState('');
  const [filePath, setFilePath] = useState('');
  const [showCard, setShowCard] = useState(false); // State to track if the card should be shown

  const handleInputChange = (event) => {
    setLink(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setCaptions('');
    setFilePath('');

    try {
      const response = await fetch('/api/saveCaptions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ youtubeUrl: link }),
      });

      const data = await response.json();

      if (response.ok) {
        setCaptions(data.fullCaptions);
        setFilePath(data.filePath); // Set the file path to state
        setShowCard(true); // Show the card once the form is successfully submitted
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError('An error occurred while extracting captions');
    }
  };

  const CheckIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
          fill="currentColor"
          strokeWidth="0"
        />
      </svg>
    );
  };

  const Step = ({ title }) => {
    return (
      <li className="flex gap-2 items-start">
        <CheckIcon />
        <p className="text-white">{title}</p>
      </li>
    );
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
        <CSSTransition
          in={showCard}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div className="flex items-start justify-center mt-8">
            <div className="text-center">
              <CardSpotlight className="h-96 w-96">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                  Authentication steps
                </p>
                <div className="text-neutral-200 mt-4 relative z-20">
                  Follow these steps to secure your account:
                  <ul className="list-none mt-2">
                    <Step title="Enter your email address" />
                    <Step title="Create a strong password" />
                    <Step title="Set up two-factor authentication" />
                    <Step title="Verify your identity" />
                    <Step title="Enter your email address" />
                    <Step title="Create a strong password" />
                    <Step title="Set up two-factor authentication" />
                    <Step title="Verify your identity" />
                  </ul>
                </div>
                <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                  Ensuring your account is properly secured helps protect your personal
                  information and data.
                </p>
              </CardSpotlight>
            </div>
          </div>
        </CSSTransition>
      </div>
    </Layout>
  );
};

export default HomePage;
