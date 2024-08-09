import React, { useEffect, useState } from 'react';
require('dotenv').config();
const Footer = () => {
  const [summaryCount, setSummaryCount] = useState(0);

  useEffect(() => {
    async function fetchSummaryCount() {
      try {
        const response = await fetch('/api/getSummaryCount');
        const data = await response.json();
        setSummaryCount(data.count);
      } catch (error) {
        console.error('Error fetching summary count:', error);
      }
    }

    fetchSummaryCount();
  }, []);

  return (
    <nav className="footer">
      <footer>
        <p>We have converted <b>{summaryCount}</b> videos to summaries! 🔥</p>
      </footer>
    </nav>
  );
};

export default Footer;
