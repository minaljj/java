const API = 'http://localhost:3000/api';

export const getQuestions = () =>
  fetch(`${API}/questions`).then(res => res.json());

export const saveQuestions = data =>
  fetch(`${API}/security-questions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(res => res.json());
  