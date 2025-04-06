import { readFileSync } from 'fs';
import { join } from 'path';

const dbPath = join(process.cwd(), 'db.json');

export default async (req, res) => {
  // Устанавливаем заголовки для поддержки CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Обработка предварительного запроса (OPTIONS)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const data = JSON.parse(readFileSync(dbPath, 'utf8'));

    if (req.method === 'GET') {
      return res.status(200).json(data.categories || []);
    }

    res.status(405).json({ message: 'Method Not Allowed' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};
