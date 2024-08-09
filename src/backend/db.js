// src/backend/db.js

import { Pool } from 'pg';

// Configure the Postgres connection pool
const pool = new Pool({
  user: process.env.NEON_DB_USER,
  host: process.env.NEON_DB_HOST,
  database: process.env.NEON_DB_NAME,
  password: process.env.NEON_DB_PASSWORD,
  port: process.env.NEON_DB_PORT,
});

export const query = (text, params) => pool.query(text, params);
