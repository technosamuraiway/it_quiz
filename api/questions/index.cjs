const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

const dbPath = join(process.cwd(), 'db.json');

module.exports = async (req, res) => {
  // Устанавливаем заголовки для поддержки CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Обработка предварительного запроса (OPTIONS)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const data = JSON.parse(readFileSync(dbPath, 'utf8'));

    if (req.method === 'GET') {
      return res.status(200).json(data.questions || []);
    }

    if (req.method === 'POST') {
      const body = req.body;

      const newQuestion = { ...body, id: Date.now() };
      data.questions.push(newQuestion);

      writeFileSync(dbPath, JSON.stringify(data, null, 2));
      return res.status(201).json(newQuestion);
    }

    res.status(405).json({ message: 'Method Not Allowed' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};
