import { useEffect, useState } from 'react';
import SecurityQuestionRow from './components/SecurityQuestionRow';

const MIN_LENGTH = 3;

function SecurityQuestionsForm() {
  const [questions, setQuestions] = useState([]);
  const [hide, setHide] = useState(true);

  const [form, setForm] = useState(
    Array.from({ length: 5 }, () => ({
      questionId: '',
      answer: '',
      confirmAnswer: '',
      answerTouched: false,
      confirmTouched: false
    }))
  );
  
  const [rowErrors, setRowErrors] = useState(Array(5).fill(''));
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/api/questions')
      .then(res => res.json())
      .then(setQuestions);
  }, []);

  useEffect(() => {
    const valid =
      form.every(
        r =>
          r.questionId &&
          r.answer.length >= MIN_LENGTH &&
          r.answer === r.confirmAnswer
      ) && rowErrors.every(e => e === '');

    setIsFormValid(valid);
  }, [form, rowErrors]);

  const handleChange = (index, field, value) => {
    const copy = [...form];
    const errors = [...rowErrors];

    if (field === 'answerBlur') {
      copy[index].answerTouched = true;
    } else if (field === 'confirmBlur') {
      copy[index].confirmTouched = true;
    } else {
      copy[index][field] = value;
    }

    const { answer, confirmAnswer, answerTouched, confirmTouched } =
      copy[index];

    if (answerTouched) {
      if (!answer) {
        errors[index] = 'Answer is required';
      } else if (answer.length < MIN_LENGTH) {
        errors[index] = `Minimum ${MIN_LENGTH} characters required`;
      } else {
        errors[index] = '';
      }
    }

    if (confirmTouched) {
      if (!confirmAnswer) {
        errors[index] = 'Confirm Answer is required';
      } else if (answer !== confirmAnswer) {
        errors[index] = 'Answers do not match';
      }
    }

    if (field === 'questionId') {
      copy[index].answer = '';
      copy[index].confirmAnswer = '';
      copy[index].answerTouched = false;
      copy[index].confirmTouched = false;
      errors[index] = '';
    }

    setForm(copy);
    setRowErrors(errors);
  };

  const selectedQuestionIds = form
    .map(f => f.questionId)
    .filter(Boolean);

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
          selectedQuestionIds={selectedQuestionIds}
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

      <button disabled={!isFormValid}>Update</button>
    </div>
  );
}

export default SecurityQuestionsForm;