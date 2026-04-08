export default function HideAnswersToggle({ hide, setHide }) {
  return (
    <label>
      <input type="checkbox" checked={hide} onChange={() => setHide(!hide)} />
      Hide Answer(s)
    </label>
  );
}
``