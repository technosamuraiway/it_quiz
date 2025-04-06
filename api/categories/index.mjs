import { readFileSync } from 'fs';
import { join } from 'path';


const dbPath = join(process.cwd(), 'db.json');

export default async (req, res) => {
  const data = JSON.parse(readFileSync(dbPath, 'utf8'));

  if (req.method === 'GET') {
    return res.status(200).json(data.categories || []);
  }

  res.status(405).json({ message: 'Method Not Allowed' });
};
