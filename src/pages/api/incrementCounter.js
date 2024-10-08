// src/pages/api/incrementCounter.js

import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Increment the counter in the database
      await pool.query('UPDATE summary_count SET count = count + 1 WHERE id = 1');

      // Send a success response
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error incrementing counter:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    // Handle any other HTTP method
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
