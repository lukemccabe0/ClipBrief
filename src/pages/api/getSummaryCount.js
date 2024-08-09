// src/pages/api/getSummaryCount.js

import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Fetch the current summary count from the database
      const result = await pool.query('SELECT count FROM summary_count WHERE id = 1');
      const count = result.rows[0].count;

      // Send the count as a JSON response
      res.status(200).json({ count });
    } catch (error) {
      console.error('Error fetching summary count:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    // Handle any other HTTP method
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
