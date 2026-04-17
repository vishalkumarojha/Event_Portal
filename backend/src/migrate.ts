import { Client } from 'pg';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = 'postgresql://postgres:Vitbhopal%40070805@db.rvjqilyoheqxanedcrqk.supabase.co:6543/postgres';

async function migrate() {
  const client = new Client({
    connectionString: connectionString,
  });

  try {
    await client.connect();
    console.log('Connected to Supabase PostgreSQL.');

    const sqlPath = path.join(__dirname, '../schema.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');

    console.log('Running migration...');
    await client.query(sql);
    console.log('Migration completed successfully.');
  } catch (err: any) {
    console.error('Migration failed:', err.message);
  } finally {
    await client.end();
  }
}

migrate();
