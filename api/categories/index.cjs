const fs = require('fs');
const path = require('path');


const dbPath = path.join(process.cwd(), 'db.json');

module.exports = async (req, res) => {
  const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

  if (req.method === 'GET') {
    return res.status(200).json(data.categories || []);
  }

  res.status(405).json({ message: 'Method Not Allowed' });
};
