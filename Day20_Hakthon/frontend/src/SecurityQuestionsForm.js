import { useEffect, useState } from 'react';
import SecurityQuestionRow from './components/SecurityQuestionRow';

function SecurityQuestionsForm() {
  const [questions, setQuestions] = useState([]);
  const [hide, setHide] = useState(true);
  const [message, setMessage] = useState('');
  const [rowErrors, setRowErrors] = useState(Array(5).fill(''));

  const [form, setForm] = useState(
    Array.from({ length: 5 }, () => ({
      questionId: '',
      answer: '',
      confirmAnswer: ''
    }))
  );

  useEffect(() => {
    fetch('http://localhost:3000/api/questions')
      .then(res => res.json())
      .then(setQuestions);
  }, []);

  const handleChange = (index, field, value) => {
    const formCopy = [...form];
    formCopy[index][field] = value;
    setForm(formCopy);

    const errorCopy = [...rowErrors];

    if (field === 'answer' || field === 'confirmAnswer') {
      if (
        formCopy[index].answer &&
        formCopy[index].confirmAnswer &&
        formCopy[index].answer !== formCopy[index].confirmAnswer
      ) {
        errorCopy[index] = 'Answers do not match';
      } else {
        errorCopy[index] = '';
      }
    }

    setRowErrors(errorCopy);
  };

  const submit = () => {
    setMessage('');

    if (rowErrors.some(err => err !== '')) {
      setMessage('Fix the errors before submitting');
      return;
    }

    fetch('http://localhost:3000/api/security-questions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: 'user123',
        questions: form
      })
    })
      .then(res => res.json())
      .then(data => setMessage(data.message));
  };

  return (
    <div style={{ width: '800px', margin: '40px auto' }}>
      <h3>Security Questions</h3>

      {form.map((row, i) => (
        <SecurityQuestionRow
          key={i}
          index={i}
          data={row}
          questions={questions}
          hide={hide}
          onChange={handleChange}
          error={rowErrors[i]}
        />
      ))}

      <label>
        <input
          type="checkbox"
          checked={hide}
          onChange={() => setHide(!hide)}
        />{' '}
        Hide Answer(s)
      </label>

      <br /><br />
      <button onClick={submit}>Update</button>

      {message && (
        <p style={{ color: 'green', fontWeight: 'bold' }}>{message}</p>
      )}
    </div>
  );
}

export default SecurityQuestionsForm;
