const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

// Путь к файлу db.json в временной директории на Vercel
const dbPath = 'tmp/db.json';

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

    // Кеширование данных на сервере
    if (req.method === 'GET') {
      // Устанавливаем заголовки кеширования
      res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=30');
      return res.status(200).json(data.categories || []);
    }

    // Обработка POST-запроса
    if (req.method === 'POST') {
      const { name } = req.body;

      if (!name) {
        return res.status(400).json({ message: 'Category name is required' });
      }

      const newCategory = {
        id: Date.now(), // Генерация нового id
        name
      };

      // Добавляем новую категорию в массив
      data.categories.push(newCategory);

      // Записываем обновленные данные обратно в db.json
      writeFileSync(dbPath, JSON.stringify(data, null, 2));

      return res.status(201).json(newCategory);
    }

    // Если метод не поддерживается
    res.status(405).json({ message: 'Method Not Allowed' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};
