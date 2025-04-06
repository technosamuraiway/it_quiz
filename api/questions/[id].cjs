const fs = require('fs');
const path = require('path');


const dbPath = path.join(process.cwd(), 'db.json');

module.exports = async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
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
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
    return res.status(200).json(questions[questionIndex]);
  }

  if (method === 'DELETE') {
    questions.splice(questionIndex, 1);
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
    return res.status(204).end();
  }

  res.status(405).json({ message: 'Method Not Allowed' });
};
