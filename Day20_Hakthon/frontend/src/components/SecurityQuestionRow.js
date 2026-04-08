function SecurityQuestionRow({
  index,
  data,
  questions,
  hide,
  onChange,
  error
}) {
  const type = hide ? 'password' : 'text';

  return (
    <div style={{ marginBottom: '12px' }}>
      <div style={{ display: 'flex' }}>
        <select
          style={{ width: '260px', marginRight: '10px' }}
          value={data.questionId}
          onChange={e =>
            onChange(index, 'questionId', Number(e.target.value))
          }
        >
          <option value="">Select Question</option>
          {questions.map(q => (
            <option key={q.id} value={q.id}>
              {q.question}
            </option>
          ))}
        </select>

        <input
          type={type}
          placeholder="Answer"
          value={data.answer}
          style={{ width: '150px', marginRight: '10px' }}
          onChange={e => onChange(index, 'answer', e.target.value)}
        />

        <input
          type={type}
          placeholder="Confirm Answer"
          value={data.confirmAnswer}
          style={{ width: '150px' }}
          onChange={e =>
            onChange(index, 'confirmAnswer', e.target.value)
          }
        />
      </div>

      {error && (
        <div style={{ color: 'red', marginLeft: '270px', fontSize: '13px' }}>
          {error}
        </div>
      )}
    </div>
  );
}

export default SecurityQuestionRow;