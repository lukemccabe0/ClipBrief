// src/pages/api/incrementCounter.js

import { query } from '../../backend/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Increment the counter in your Postgres database
      const result = await query(
        'UPDATE counters SET count = count + 1 WHERE id = $1 RETURNING count',
        [1]
      );
      
      const newCount = result.rows[0].count;
      
      res.status(200).json({ count: newCount });
    } catch (error) {
      console.error('Error updating counter:', error);
      res.status(500).json({ error: 'Failed to update counter' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
