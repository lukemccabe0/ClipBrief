// src/components/SummaryComponent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { CardSpotlight } from './ui/card-spotlight'; // Adjust the import path as necessary
import { TextGenerateEffect } from './ui/text-generate-effect';

const SummaryComponent = ({ youtubeUrl }) => {
  const [summary, setSummary] = useState('Fetching summary...'); // Initial placeholder text

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await axios.post('/api/summarize', { youtubeUrl });
        console.log('Summary fetched:', response.data.summary); // Debugging
        setSummary(response.data.summary);
        toast.success('Summary fetched successfully!');
      } catch (error) {
        console.error('Error fetching summary:', error);
        setSummary('Failed to fetch summary.');
        toast.error('Failed to fetch summary');
      }
    };

    if (youtubeUrl) {
      console.log('Fetching summary for URL:', youtubeUrl);
      fetchSummary();
    }
  }, [youtubeUrl]);

  return (
    <div className="flex justify-center mt-4"> {/* Center the card */}
      <CardSpotlight className="card-custom-dimensions"> {/* Constrain width and height */}
        <p className="text-xl font-bold relative z-20 mt-2 text-white"><b>Video Summary</b></p>
        <div className="text-neutral-200 mt-4 relative z-20">
        <TextGenerateEffect words={summary} />
        </div>
        <p className="text-neutral-300 mt-4 relative z-20 text-sm">
          {/* <b>--<i> Due to the use of AI, the summary may be subject to bias and not be completely accurate to the original video.</i> --</b>
          <br />
          <b>-<i> Did you know? It takes around 30 seconds to summarise a 9-hour video!</i> -</b> */}
          <i> Due to the use of AI, the summary may be subject to bias and not be completely accurate to the original video.</i>
        </p>
      </CardSpotlight>
    </div>
  );
};

export default SummaryComponent;
