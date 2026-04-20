const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const { useEffect } = require('react');

const app = express();
app.use(cors());
app.use(express.json());

const QUESTIONS_FILE = path.join(__dirname, 'data/questions.json');
const ANSWERS_FILE = path.join(__dirname, 'data/answers.json');

const readJson = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const writeJson = (file, data) =>
  fs.writeFileSync(file, JSON.stringify(data, null, 2));

app.get('/api/questions', (req, res) => {
  res.json(readJson(QUESTIONS_FILE));
});

app.post('/api/security-questions', (req, res) => {
  const { userId, questions } = req.body;


  if (!userId || questions.length !== 5) {
    return res.status(400).json({ message: 'Exactly 5 questions required' });
  }

  const unique = new Set(questions.map(q => q.questionId));
  if (unique.size !== 5) {
    return res.status(400).json({ message: 'Questions must be unique' });
  }

  const data = readJson(ANSWERS_FILE);
  data.push({ userId, questions });
  writeJson(ANSWERS_FILE, data);
  res.json({ message: 'Security questions saved successfully' });
});

app.listen(3000, () => {
  console.log('Backend running on http://localhost:3000');
});
