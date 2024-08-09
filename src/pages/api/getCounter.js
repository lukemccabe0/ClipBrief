// src/pages/api/getCounter.js

import { query } from '../../backend/db';

export default async function handler(req, res) {
  try {
    const result = await query('SELECT count FROM counters WHERE id = $1', [1]);
    const count = result.rows[0].count;
    res.status(200).json({ count });
  } catch (error) {
    console.error('Error fetching counter:', error);
    res.status(500).json({ error: 'Failed to fetch counter' });
  }
}
