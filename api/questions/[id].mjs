import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const dbPath = join(process.cwd(), 'db.json');

export default async (req, res) => {
  // Устанавливаем заголовки для поддержки CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Обработка предварительного запроса (OPTIONS)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const {
      query: { id },
      method,
    } = req;

    const data = JSON.parse(readFileSync(dbPath, 'utf8'));
    const questions = data.questions || [];
    const questionIndex = questions.findIndex(q => q.id == id);

    if (questionIndex === -1) {
      return res.status(404).json({ message: 'Not Found' });
    }

    if (method === 'GET') {
      return res.status(200).json(questions[questionIndex]);
    }

    if (method === 'PUT') {
      questions[questionIndex] = { ...questions[questionIndex], ...req.body };
      writeFileSync(dbPath, JSON.stringify(data, null, 2));
      return res.status(200).json(questions[questionIndex]);
    }

    if (method === 'DELETE') {
      questions.splice(questionIndex, 1);
      writeFileSync(dbPath, JSON.stringify(data, null, 2));
      return res.status(204).end();
    }

    res.status(405).json({ message: 'Method Not Allowed' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};
