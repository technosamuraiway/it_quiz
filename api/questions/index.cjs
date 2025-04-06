const fs = require('fs');
const path = require('path');


const dbPath = path.join(process.cwd(), 'db.json');

module.exports = async (req, res) => {
  const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

  if (req.method === 'GET') {
    return res.status(200).json(data.questions || []);
  }

  if (req.method === 'POST') {
    const body = req.body;

    const newQuestion = { ...body, id: Date.now() };
    data.questions.push(newQuestion);

    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
    return res.status(201).json(newQuestion);
  }

  res.status(405).json({ message: 'Method Not Allowed' });
};
