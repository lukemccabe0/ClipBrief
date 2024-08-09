import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,  // Ensure this uses the environment variable
  ssl: {
    rejectUnauthorized: false,  // Often required when connecting to a remote PostgreSQL server
  },
});

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const result = await pool.query('SELECT count FROM summary_count WHERE id = 1');
      const count = result.rows[0]?.count;

      if (count !== undefined) {
        res.status(200).json({ count });
      } else {
        res.status(404).json({ error: 'Summary count not found' });
      }
    } catch (error) {
      console.error('Error fetching summary count:', error.message, error.stack);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
